import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';



@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  @Input() name!:string;
  @Input() lists:any;
  idItem:number = 0;
  itemName="";
  id:number = 0;




  constructor(
    private listService : ListService
  ) {}


  ngOnInit(): void {
  }

  dataModal(idItem:number,name:string){
      this.idItem = idItem;
      this.itemName = name;
  }


  deleteItem(id:number){
       this.listService.deleteItem(id).subscribe(data => 
        location.reload());
       
  }

  updateItem(){
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
    var item ={
      idList:this.id,
      idItem:this.idItem,
      name:this.itemName
   }
   this.listService.updateItem(item).subscribe(data => 
    location.reload());
  }



}
