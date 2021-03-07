import { Component } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent{
	
	categories = [];	


	constructor() {
		this.categories = this.getCategories();
	}	
	
	getCategories() {
		return [
			{
				id: 1,
				name: 'Development'
			},
			{
				id: 2,
				name: 'Art'
			},
			{
				id: 3,
				name: 'Languages'
			}
		];
	}

	submit(course) {
		console.log(course);
	}

	log(x) {
		console.log(x);
	}
}
