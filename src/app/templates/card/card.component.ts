import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';

import { CardsComponent } from './../popups/cards/cards.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards = [
    { uid: 1, name: 'Card' },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCardPopup(card, index): void {
    const dialogRef = this.dialog.open(CardsComponent, {
      width: '850px',
      data: { cardId: card.uid, cardName: card.name, indexValue: index }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      if (result.cardId) {
        this.cards.splice(result.indexValue, 1);
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

  addCards(): any {
    const uid = this.cards.length === 0 ? 1 : Number(this.cards[this.cards.length-1].uid + 1);
    const obj = { uid: uid , name: 'Card' };
    this.cards.push(obj);
  }

}
