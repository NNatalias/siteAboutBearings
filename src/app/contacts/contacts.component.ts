import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  sent = false;
  error = false;

  constructor(private http: HttpClient) {
  }
  ngOnInit() {
  }

  OnSubmit(mailForm) {
    this.http.post('../../assets/mailto.php', JSON.stringify(mailForm.value))
        .subscribe(
            res => {
              this.sent = true;
              console.log(res);
            },
            err => {
              this.error = true;
              console.log('Error');
            }
        );
  }
}
