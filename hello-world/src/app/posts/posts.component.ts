import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { IPost } from '../interfaces/post/IPost';
import { IPost_PostResponse } from '../interfaces/post/IPost_PostResponse'

@Component({
	selector: 'posts',
  	templateUrl: './posts.component.html',
  	styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

	posts: any[];
	errorToast : boolean = false;
	

	constructor(private service: PostService) { 
		
	}

	ngOnInit(): void {
		this.service.getPosts()
			.subscribe(
				(response : any[]) => {
					this.posts = response;
				}, 
				(error) => {
					alert('An unexpected error occurred.');
					this.errorToast = true;
					console.log(error);
				}
			);
	}

	log(x) { 
		console.log(x);
	}

	

	createPost(inputTitle : HTMLInputElement) {
		let post : IPost= {
			id: undefined,
			title: inputTitle.value,
			author: 'Omer'
		};

		this.service.createPost(post)
			.subscribe(
				(response: IPost_PostResponse) => {
					this.posts.splice(0, 0, response);

					inputTitle.value = '';
				}, 
				(error: Response) => {
					if(error.status === 400) {
						//this.form.setErrors(error.json())
					}
					else {
						alert('An unexpected error occurred.');
						console.log(error);
					}
				}
			);
	}

	updatePost(post) {
		post.title = "Hello Omer";
		post.author = "Ali"

		this.service.updatePost(post)
			.subscribe(
				(response) => {
					console.log(response);
					post = response;
				}, 
				(error) => {
					alert('An unexpected error occurred.');
					console.log(error);
				}
			);
	}

	deletePost(post) {
		console.log(post);

		this.service.deletePost(post.id)
			.subscribe( (response) => {
				console.log('Response: ', response);	
				
				let index = this.posts.indexOf(post);
				this.posts.splice(index, 1);
			}, 
			(error : Response) => {
				if(error.status === 404) {
					alert('This post has already been deleted.');
				}
				else {
					alert('An unexpected error occurred.');
				}
			});
	}

}