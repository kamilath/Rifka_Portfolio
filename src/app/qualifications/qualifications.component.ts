import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qualifications',
  imports: [CommonModule],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss'
})
export class QualificationsComponent implements OnInit {
  data: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/qualifications').subscribe((response: any) => {
      this.data = response;
    });
  }
}
