import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FollowersService } from '../services/followers/followers.service';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

	followers: any[];

	constructor(private route: ActivatedRoute, private service: FollowersService) { }

	ngOnInit(): void {
		let obs = combineLatest([
			this.route.paramMap,
			this.route.queryParamMap
		]).subscribe( (combined) => {
			let page: number = parseInt(combined[1].get('page'));
			let order: string = combined[1].get('order');

			this.service.getAll()
			.subscribe(
				(followers: any[]) => {
					this.followers = followers;
				}
			);
		});

		// this.route.queryParamMap.subscribe( (params) => {
		// 	let page: number = parseInt(params.get('page'));
		// 	let order: string = params.get('order');
		// });

		
	}

}
