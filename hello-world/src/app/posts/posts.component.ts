import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { IPost } from '../interfaces/post/IPost';
import { IPost_PostResponse } from '../interfaces/post/IPost_PostResponse'
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
	selector: 'posts',
  	templateUrl: './posts.component.html',
  	styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

	posts: any[];
	errorToast : boolean = false;
	

	constructor(private service: PostService) { }

	log(x) { 
		console.log(x);
	}

	ngOnInit(): void {
		this.service.getAll()
			.subscribe(
				(posts : any[]) => {
					this.posts = posts;
				}
			);
	}

	createPost(inputTitle : HTMLInputElement) {
		let post : IPost = {
			id: undefined,
			title: inputTitle.value,
			author: 'Omer'
		};
		this.posts.splice(0, 0, post);

		inputTitle.value = '';

		this.service.create(post)
			.subscribe(
				(newPost: IPost_PostResponse) => {
					post.id = newPost.id;
				}, 
				(error: AppError) => {
					this.posts.splice(0, 1);

					if(error instanceof BadRequestError) {
						//this.form.setErrors(error.originalError)
					}
					else {
						throw error;
					}
				}
			);
	}

	updatePost(post) {
		post.title = "Hello Omer";
		post.author = "Ali"

		this.service.update(post)
			.subscribe(
				(post) => {
					post = post;
				}
			);
	}

	deletePost(post) {
		let index = this.posts.indexOf(post);
		this.posts.splice(index, 1);

		this.service.delete(500)
			.subscribe( 
				() => {	}, 
				(error : AppError) => {
					this.posts.splice(index, 0, post);

					if(error instanceof NotFoundError) {
						alert('This post has already been deleted.');
					}
					else {
						throw error;
					}
				}
			);
	}

}