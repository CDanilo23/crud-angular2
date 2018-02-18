import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from './person';
import { PersonService } from './person.service';
 
@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styles: []
})
export class PersondetailComponent implements OnInit, OnDestroy {
  person: Person;
  sub: any;
 
  constructor(private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }
 
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.personService.get(id).subscribe(p => this.person = p);
    });
  }
 
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
 
  gotoEdit() {
    this.router.navigate(['/person/edit', this.person.id]);
  }
 
}