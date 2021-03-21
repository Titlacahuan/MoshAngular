import {Component} from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{ course.title | uppercase | lowercase }}<br />
        {{ course.students | number }}<br />
        {{ course.rating | number:'2.2-2' }}<br/>
        {{ course.price | currency:'CAD':true:'3.2-2' }} <br />
        {{ course.releaseDate | date:'longDate' }} <br />
        <br />
        {{ text | summary:100 }} <br />
        <input [(ngModel)]='title' />
        {{ title | titleCasing }}
        `
})
export class CoursesComponent {
    title: string = '';
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };

    text : string = "Lorem ipsum is simply dummy text of the printing and typeset something something something something something";
}