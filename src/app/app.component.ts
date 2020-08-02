import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular file upload';


  uploadFile(evt){
    console.log('evt: ', evt);
    // evt is an array of the file(s) dropped on our div. Here we're assuming only one file has been uploaded
    let payload = new FormData();
    payload.append('data', evt[0]);
    // File can now be uploaded by doing an http post with the payload
  }

}
