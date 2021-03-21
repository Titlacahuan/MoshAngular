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
	

	constructor(private service: PostService) { 
		
	}

	ngOnInit(): void {
		this.service.getPosts()
			.subscribe((response : any[]) => {
				this.posts = response;
			});
	}

	log(x) { 
		console.log(x);
	}

	

	createPost(inputTitle : HTMLInputElement) {
		let post : IPost = {
			id: undefined,
			userId: 0,
			title: inputTitle.value,
			body: ''
		};

		this.service.createPost(post)
			.subscribe((response: IPost_PostResponse) => {
				post.id = response.id;
				console.log(post);
				console.log(response);

				this.posts.splice(0, 0, post);

				inputTitle.value = '';
			});
	}

	updatePost(post) {
		post.title = "Hello Omer";

		this.service.updatePost(post)
		.subscribe(response => {
			console.log(response);
			post = response;
		});
	}

	deletePost(post) {
		this.service.deletePost(post.id)
			.subscribe(response => {
				console.log(response);
				let index = this.posts.indexOf(post);
				this.posts.splice(index, 1);
			});
	}

}