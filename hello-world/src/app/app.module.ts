import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

/* Components */
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostsComponent } from './posts/posts.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthorsComponent } from './authors/authors.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FollowersComponent } from './followers/followers.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

/* Services / Providers */
import { CoursesService } from './services/courses/courses.service';
import { PostService } from './services/post/post.service';
import { FollowersService } from './services/followers/followers.service';
import { AppErrorHandler } from './common/app-error-handler';

/* Directives */
import { TitleDirective } from './directives/title/title.directive';
import { InputFormatDirective } from './directives/input-format/input-format.directive';

/* Pipes */
import { SummaryPipe } from './pipes/summary/summary.pipe';
import { TitleCasingPipe } from './pipes/titleCasing/titleCasing.pipe';

@NgModule({
	declarations: [
		AppComponent,
		CourseComponent,
		CoursesComponent,
		AuthorsComponent,
		SummaryPipe,
		TitleCasingPipe,
		FavoriteComponent,
		PanelComponent,
		LikeComponent,
		InputFormatDirective,
		ZippyComponent,
		TitleDirective,
		ContactFormComponent,
		CourseFormComponent,
		SignupFormComponent,
		NewCourseFormComponent,
		ChangePasswordFormComponent,
		PostsComponent,
		FollowersComponent,
		NavbarComponent,
		HomeComponent,
		GithubProfileComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot([
			{ 
				path: '', 
				component: HomeComponent 
			},
			{ 
				path: 'followers/:id/:username',
				component: GithubProfileComponent 
			},
			{ 
				path: 'followers', 
				component: FollowersComponent 
			},
			{ 
				path: 'posts', 
				component: PostsComponent 
			},
			{ 
				path: '**', 
				component: NotFoundComponent 
			}
		]),
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [
		PostService,
		CoursesService,
		FollowersService,
		{
			provide: ErrorHandler,
			useClass: AppErrorHandler
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
