import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Experience {
  timePeriod: string;
  position: string;
  company: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: false
})
export class ExperienceComponent implements OnInit {

  experiences$: Observable<Experience[]> | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.experiences$ = this.http.get<Experience[]>('./assets/data/experience.json');
  }

}
