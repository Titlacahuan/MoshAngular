import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable()
// {
// 	providedIn: 'root'
//   }
export class PostService extends DataService {
  	constructor(http: HttpClient) { 
		super('http://localhost:3000/posts', http, {
			'headers': {
				'content-type': 'application/json'
			}
		});
	}
}
