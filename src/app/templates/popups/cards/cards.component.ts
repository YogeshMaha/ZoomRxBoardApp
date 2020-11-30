import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CardComponent } from './../../card/card.component';

export interface dialogData {
  name: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  data: any;
  date = new Date();

  comments = [];

  constructor(public dialogRef: MatDialogRef<CardComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: dialogData) { }

  ngOnInit(): void {
    this.data = {};
    this.data.name = this.dialogData['cardName'] + ' ' + this.dialogData['cardId'];
    // console.log(this.dialogData);
    // console.log(this.date);
  }

  addComment(formData): any {
    // console.log(formData);
    if (formData.comment) {
      const obj = {
        comment: formData.comment, 
        date: this.date
      }
      this.comments.push(obj);
      this.data.comment = '';
    }
  }

  deleteCard(): any {
    const cardData = this.dialogData;
    this.dialogRef.close(cardData);
  }

  onCloseCard(): void {
    this.dialogRef.close();
  }

}
