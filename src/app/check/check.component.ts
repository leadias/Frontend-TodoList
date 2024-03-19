import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';



@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  @Input() name!:string;
  @Input() listsEmployee:any;
  idItem:number = 0;
  itemName="";
  date="";
  identification = "";
  position="";
  id:number = 0;
  lists:any;
  getLists:any;
  idPosition:number = 0;

  constructor(
    private listService : ListService
  ) {}


  ngOnInit(): void {
    this.getList();
  }

  dataModal(list:any){
      this.idItem = list.id;
      this.identification = list.identification;
      this.position = list.position;
      this.date = list.date;
      this.itemName = list.name;
  }

  getList(){
    this.getLists = this.listService.get().subscribe(data =>
     this.lists = data.response );

 }

 getListPosition(){
  switch (this.position) {
    case 'Scrum master':
      this.idPosition = 0;
      break;
    case 'Desarrollador':
      this.idPosition = 1;
      break;

    case 'QA':
      this.idPosition = 2;
      break;
  
    default:
      this.idPosition = 3;
      break;
  }
}


  deleteItem(id:number){
       this.listService.deleteItem(id).subscribe(data => 
        location.reload());
       
  }

  updateItem(){
    var item ={
      Id : this.idItem,
      identification : this.identification,
      name : this.itemName,
      date : this.date,
      position : this.idPosition
   }
   this.listService.updateItem(item).subscribe(data => 
    location.reload());
  }



}
