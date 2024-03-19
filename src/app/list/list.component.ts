import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  name: string = "";
  lists:any;
  listsEmployee:any;
  getLists:any;
  id:number = 1; 
  item = ""
  date= ""
  identification = ""
  position = ""
  constructor(
    private listService : ListService
  ) { }
  
  ngOnInit(): void {
    this.getList();
    this.getListEmployee();
  }

  setSort(event: Event): void {
    this.name = (<HTMLInputElement>event.target).value;
  }

  getList(){
     this.getLists = this.listService.get().subscribe(data =>
      this.lists = data.response );

  }

  getListEmployee(){
    this.getLists = this.listService.getEmployes().subscribe(data =>
     this.listsEmployee = data.response );

 }

  getListPosition(){
    switch (this.position) {
      case 'Scrum master':
        this.id = 0;
        break;
      case 'Desarrollador':
        this.id = 1;
        break;

      case 'QA':
        this.id = 2;
        break;
    
      default:
        this.id = 3;
        break;
    }
  }

  createItem(){
    var item ={
       identification:this.identification,
       name: this.name,
       date: this.date,
       position: this.id
    }
    this.listService.createItem(item).subscribe(data =>
      this.getList());
  }

}
