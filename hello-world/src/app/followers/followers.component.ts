import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers/followers.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

	followers: any[];

	constructor(private service: FollowersService) { }

	ngOnInit(): void {
		this.service.getAll()
		.subscribe(
			(followers: any[]) => {
				this.followers = followers;
			}
		)
	}

}
