import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

	posts: any[];
	private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : HttpClient) { 
	  http.get(this.url)
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

	this.http.post(this.url, JSON.stringify(post))
		.subscribe((response: IPost_PostResponse) => {
			post.id = response.id;
			console.log(post);
			console.log(response);

			this.posts.splice(0, 0, post);

			inputTitle.value = '';
		});
  }
}

interface IPost {
	id;
	userId;
	title;
	body;
}

interface IPost_PostResponse {
	id;
}
