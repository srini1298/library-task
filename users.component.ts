import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../servicefolder/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  @ViewChild('userform',{ static : false})"fetchforms":NgForm
  userlist:any[]=[]
  
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userlist=this.userservice.getvalue();
  }
  onSubmit(){
    this.fetchforms.reset();
  }
  addusers(uname:any,uemail:any,uaddress:any,ucity:any,ucontactno:any){
    
  this.userservice.adduserslist({username:uname,email:uemail,address:uaddress,city:ucity,contactno:ucontactno});
  }
  onedit(id:any,username:any,email:any,address:any,city:any,contactno:any){
   
    this.fetchforms.setValue({
      
      uname:username,
      uemail:email,
      uaddress:address,
      ucity:city,
      ucontactno:contactno
     })
     this.userlist.splice(id,1)
  
  }
  ondelete(id:any){
    this.userservice.deleteuserslist(id);

  }

}
