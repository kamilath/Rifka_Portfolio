import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  data: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/contact').subscribe((response: any) => {
      this.data = response;
    });
  }
}
