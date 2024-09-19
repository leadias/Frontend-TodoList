import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  name: string = "All";
  lists:any;
  getLists:any;
  id:number = 1; 
  item = ""
  constructor(
    private listService : ListService
  ) { }
  
  ngOnInit(): void {

  }

  setSort(event: Event): void {
    this.name = (<HTMLInputElement>event.target).value;
    this.getList();
  }

  getList(){
    switch (this.name) {
      case 'All':
        this.id = 1;
        break;
      case 'Sucess':
        this.id = 2;
        break;

      case 'Faild':
        this.id = 3;
        break;
    
      default:
        this.id = 1;
        break;
    }
     this.getLists = this.listService.get(this.id).subscribe(data =>
      this.lists = data.response );
  }

  createItem(){
    var item ={
       idList:this.id,
       name: this.item
    }
    this.listService.createItem(item).subscribe(data =>
      this.getList());
  }

}
