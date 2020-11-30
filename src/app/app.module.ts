import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { BoardComponent } from './templates/board/board.component';
import { ListComponent } from './templates/list/list.component';
import { CardComponent } from './templates/card/card.component';
import { CardsComponent } from './templates/popups/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
    CardsComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    MatInputModule
  ],
  entryComponents: [ 
    CardsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
