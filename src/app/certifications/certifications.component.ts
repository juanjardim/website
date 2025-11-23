import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface Certification {
  name: string;
  badgeUrl: string;
  status: string;
  issued: string;
  credentialId: string;
  verifyUrl: string;
}

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  standalone: false
})
export class CertificationsComponent implements OnInit {

  certifications$: Observable<Certification[]> | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.certifications$ = this.http.get<Certification[]>('./assets/data/certifications.json').pipe(
      tap(data => console.log('Certifications loaded:', data)),
      catchError(error => {
        console.error('Error loading certifications:', error);
        return of([]);
      })
    );
  }

}
