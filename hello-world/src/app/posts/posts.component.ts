import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'posts',
  	templateUrl: './posts.component.html',
  	styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

	posts: any[];
	private url = 'https://jsonplaceholder.typicode.com/posts';

	constructor(private http : HttpClient) { 
		http.get(this.url)
			.subscribe((response : any[]) => {
				this.posts = response;
		  	});
	}

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

/* PREVIOUS LESSON */
//   log(x) { 
// 	  console.log(x);
//   }

//   createPost(inputTitle : HTMLInputElement) {
// 	let post : IPost = {
// 		id: undefined,
// 		userId: 0,
// 		title: inputTitle.value,
// 		body: ''
// 	};

// 	this.http.post(this.url, JSON.stringify(post))
// 		.subscribe((response: IPost_PostResponse) => {
// 			post.id = response.id;
// 			console.log(post);
// 			console.log(response);

// 			this.posts.splice(0, 0, post);

// 			inputTitle.value = '';
// 		});
//   }

//   updatePost(post) {
// 	  post.title = "Hello Omer";
// 	  this.http.put(`${this.url}/${post.id}`, JSON.stringify(post))
// 	  	.subscribe(response => {
// 			  console.log(response);
// 			  post = response;
// 		  });
//   }
// deletePost(post) {
// 	this.http.delete(`${this.url}/${post.id}`)
// 		.subscribe(response => {
// 			console.log(response);
// 			let index = this.posts.indexOf(post);
// 			this.posts.splice(index, 1);
// 		});
// 	}
// }

// interface IPost {
// 	id;
// 	userId;
// 	title;
// 	body;
// }

}

// interface IPost_PostResponse {
// 	id;
// }