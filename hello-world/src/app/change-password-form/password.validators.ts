import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
	static oldPasswordDoesNotMatch(control: AbstractControl) : Promise<ValidationErrors | null> {
		let result = new Promise( (resolve, reject) => {
			// ensure username is unique.
			if(control.value !== '1234') {
				resolve({oldPasswordDoesNotMatch : true });
			}
			else {
				resolve(null);
			}
		});
		
		return result;
	}

	static passwordsDoNotMatch(formControl: AbstractControl) : ValidationErrors | null {
		let result = null;

		if(formControl.get('newPassword').value !== formControl.get('confirmPassword').value) {
			result = {
				passwordsDoNotMatch: true
			};
		}

		return result;
	}
}