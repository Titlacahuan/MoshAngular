import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent {

	changePasswordForm : FormGroup;

	constructor(fb: FormBuilder) {
		this.changePasswordForm = fb.group({
			oldPassword: ['', Validators.required, PasswordValidators.oldPasswordDoesNotMatch],
			newPassword: ['', Validators.required],
			//confirmPassword: ['', [Validators.required, PasswordValidators.passwordsDoNotMatch]]
			confirmPassword: ['', Validators.required]
		}, {
			validators: [PasswordValidators.passwordsDoNotMatch]
		});
	}

	get oldPassword() {
		return this.changePasswordForm.get('oldPassword');
	}

	get newPassword() {
		return this.changePasswordForm.get('newPassword');
	}

	get confirmPassword() {
		return this.changePasswordForm.get('confirmPassword');
	}
}
