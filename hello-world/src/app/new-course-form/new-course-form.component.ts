import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent {

	newCourseForm = new FormGroup({
		topics: new FormArray([]) 
	});

	submit() {
		
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
