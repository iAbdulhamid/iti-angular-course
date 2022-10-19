import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /// <app-root>: component directive (added by angular) to HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

  /// now, it's 'Inline Component'... no html or css external files...
  /// template: `<h1> Inline Component </h1>`,
  /// styles: ['h1 { color: red }']
})
export class AppComponent {
  title = 'iti-angular-course';

  sayHello(): string {
    return `Hello World from ${this.title}`;
  }
}
