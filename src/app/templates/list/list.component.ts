import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  lists = [
    { uid: 1, name: 'List'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addLists(): any {
    // console.log(this.lists[this.lists.length-1].uid);
    // console.log(this.lists);
    const obj = { uid: Number(this.lists[this.lists.length-1].uid + 1) , name: 'List' };
    this.lists.push(obj);
  }

  deleteLists(list, index): any {
    // console.log(index)
    this.lists.splice(index, 1);
  }

}
