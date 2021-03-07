import { mapToMapExpression } from '@angular/compiler/src/render3/util'
import { Component } from '@angular/core'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	courses;

	onAdd() {
		let nextId = undefined;
		if(this.courses.length > 0)
			nextId = this.courses[this.courses.length - 1].id + 1;
		else
			nextId = 1;

		this.courses.push( {
			id: nextId,
			name: 'course' + nextId
		});
	}

	onRemove(course) {
		let indexToRemove = this.courses.indexOf(course);

		this.courses.splice(indexToRemove, 1);
	}

	loadCourses() {
		this.courses = [
			{
				id: 1, name: 'course1'
			},
			{
				id: 2, name: 'course2'
			},
			{
				id: 3, name: 'course3'
			}
		];
	}

	trackCourse(index, course) {
		return course ? course.Id : undefined;
	}
}
