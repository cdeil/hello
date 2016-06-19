import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hello-app',
  templateUrl: 'hello.component.html',
  styleUrls: ['hello.component.css']
})
export class HelloAppComponent {
  title = 'hello works!';
}
