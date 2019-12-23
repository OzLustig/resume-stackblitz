import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-say-hello-navigation',
  templateUrl: './say-hello-navigation.component.html',
  styleUrls: ['./say-hello-navigation.component.css']
})
export class SayHelloNavigationComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(private messageService: MessageService, private _snackBar: MatSnackBar) { }

  helpForm: FormGroup;

  ngOnInit() {
    this.helpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit() {
    const message1: string = this.helpForm.get('message').value;
    const name1: string = this.helpForm.get('name').value;
    const email1: string = this.helpForm.get('email').value;
    const messageObject = { message: message1, email: email1, name: name1 };
    const status = this.messageService.sendMessage(messageObject).subscribe((data: any) => {
      const parsedData = this.parseStatus(data.res1);
      this.openSnackBar(parsedData);
    });
    this.resetForm();
  }

  parseStatus(status: string) {
    if (status.startsWith('250')) {
      return 'Email delivered successfully';
    } else {
      return 'Email was not sent, please try again later.';
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 4000,
    });
  }

  resetForm() {
    console.log('resetForm clicked');
    this.helpForm.reset();
  }

  get name() {
    return this.helpForm.get('name');
  }

  get email() {
    return this.helpForm.get('email');
  }

  get message() {
    return this.helpForm.get('message');
  }

  formValidated() {
    return this.helpForm.valid;
  }
}
