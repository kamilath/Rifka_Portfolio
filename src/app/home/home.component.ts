import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  data: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/home').subscribe((response: any) => {
      this.data = response;
    });
  }
}
