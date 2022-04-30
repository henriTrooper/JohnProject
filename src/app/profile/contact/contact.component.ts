import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
declare let Email: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  model: any = {};

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }
  onSubmit(name, subject, email, message) {

    /* const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/myyobded',
      { name: name, subject: subject, replyto: email, message: message },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      ); */


  }

  login(name, subject, email, message): void {
    console.log('name + subject + email + message', name)
    console.log('name + subject + email + message', subject)
    console.log('name + subject + email + message', email)
    console.log('name + subject + email + message', message)

    Email.send({
      Host: "smtp.gmail.com",
      Username: "henri.mersch31@gmail.com",
      Password: "henriISABELLE61",
      To: "contact@fournet-terrassement.fr",
      From: "mersch.henri@icloud.com",
      Subject: "Demande de contact",
      Body: "Nom :  " + name + ' ; ' + ' Prenom : ' + subject + ' ; ' + ' Email : ' + email + ' ; ' +  " Message  : " + message

    }).then(message => {
      console.log('eeeeeee', message)
      message => alert("mail sent successfully")
    });
  }

 


}
