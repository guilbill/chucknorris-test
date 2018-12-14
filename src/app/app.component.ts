import {Component, OnInit} from '@angular/core';
import {ChuckNorrisService} from './chuck-norris.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    facts: Array<Fact> = new Array<Fact>();
    lastName: String;
    firstName: String;


    constructor(private chuckNorrisService: ChuckNorrisService) {}

    getJoke() {
        this.chuckNorrisService.getFact().subscribe(
            value => {
                console.log(value);
                this.facts = this.facts.concat(value);
            }
        );
    }
}
