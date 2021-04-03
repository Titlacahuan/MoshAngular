import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-github-profile',
	templateUrl: './github-profile.component.html',
	styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

	

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.paramMap
			.subscribe( (params) => {
				let id =  parseInt(params.get('id'));
				console.log(id);
			});
	}

}
