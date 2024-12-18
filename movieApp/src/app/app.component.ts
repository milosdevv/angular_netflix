import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'movieApp';

constructor(private router:Router){}
ngOnInit(): void {
  this.router.navigate(['/dashboard'])
}

// ngOnInit(): void {
//   this.router.navigate(['/login'])
// }
}
