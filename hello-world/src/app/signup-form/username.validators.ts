import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
	
	static cannotContainSpace(control : AbstractControl) : ValidationErrors | null {
		let result = null;
		
		if((control.value as string).indexOf(' ') >= 0) {
			result = {
				cannotContainSpace: true
			};
		}

		return result;
	}

	static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null> {
		let result = new Promise( (resolve, reject) => {
			setTimeout(() => {
				// ensure username is unique.
				if(control.value === 'omer') {
					resolve({shouldBeUnique : true });
				}
				else {
					resolve(null);
				}
			}, 2000);
		});
		
		return result;
	}
}