import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from 'src/app/common/app-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { BadRequestError } from 'src/app/common/bad-request-error';

export class DataService {
  	constructor(private url: string, private http: HttpClient, private requestOptions: Object) { }

	getAll() {
		return this.http.get(this.url)
			.pipe(map((response) => response))
			.pipe(catchError(this.handleError))
	}

	create(resource) : Observable<Object> {
		return this.http.post(this.url, JSON.stringify(resource), this.requestOptions)
			.pipe(map((response) => response))
			.pipe(catchError(this.handleError));
	}

	update(resource) : Observable<Object> {
		return this.http.put(`${this.url}/${resource.id}`, JSON.stringify(resource), this.requestOptions)
			.pipe(map((response) => response))
			.pipe(catchError(this.handleError));
	}

	delete(id) : Observable<Object> {
		return this.http.delete(`${this.url}/${id}`)
			.pipe(map((response) => response))
			.pipe(catchError(this.handleError));
	}

	private handleError(error: Response) {
		if(error.status === 400) {
			return throwError(new BadRequestError(error.json()));
		}
		
		if(error.status === 404) {
			return throwError(new NotFoundError());
		}
		
		return throwError(new AppError(error.json));
	}
}
