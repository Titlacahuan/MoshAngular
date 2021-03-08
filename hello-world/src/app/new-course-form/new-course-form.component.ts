import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent {

	newCourseForm;
	// Reactive forms without form builder
	// newCourseForm = new FormGroup({
	// 	name: new FormControl(),
	// 	contact: new FormGroup({
	// 		email: new FormControl(),
	// 		phone: new FormControl()
	// 	}),
	// 	topics: new FormArray([]) 
	// });

	// Same form as above that is commented out, using form builder
	constructor(fb: FormBuilder) {
		this.newCourseForm = fb.group({
			name: ['', Validators.required],
			contact: fb.group( {
				email: [],
				phone: []
			}),
			topics: fb.array([])
		})
	}

	addTopic(topic : HTMLInputElement) {
		this.topics.push(new FormControl(topic.value));
		topic.value = '';
	}

	removeTopic(topic : FormControl) {
		console.log(topic);
		let index = this.topics.controls.indexOf(topic);
		this.topics.removeAt(index);
	}

	get topics() {
		return this.newCourseForm.get('topics') as FormArray;
	}
}
