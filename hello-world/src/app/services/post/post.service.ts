import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../../interfaces/post/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
	private url = 'http://localhost:3000/posts';
	//private url = 'https://jsonplaceholder.typicode.com/posts';

  	constructor(private http: HttpClient) { }

	getPosts() : Observable<Object> {
		return this.http.get(this.url);
	}

	createPost(post: IPost) : Observable<Object> {
		return this.http.post(this.url, JSON.stringify(post), {
			headers: {
				'content-type': 'application/json'
			}
		});
	}

	updatePost(post: IPost) : Observable<Object> {
		return this.http.put(`${this.url}/${post.id}`, JSON.stringify(post), {
			headers: {
				'content-type': 'application/json'
			}
		});
	}

	deletePost(postId: number) : Observable<Object> {
		return this.http.delete(`${this.url}/${postId}`);
	}
}
