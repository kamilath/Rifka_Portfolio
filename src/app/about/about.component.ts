import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  data: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/about').subscribe((response: any) => {
      this.data = response;
    });
  }
}
