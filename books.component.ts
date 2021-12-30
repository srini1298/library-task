import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../servicefolder/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  @ViewChild('bookform',{ static : false})"fetchform":NgForm
  constructor(private bookservice :BookService) { }

  ngOnInit(): void {
    this.booklist=this.bookservice.getdata();
    console.log(this.booklist);
   
  }
 booklist:any[]=[]
 onsubmit(){
  
  this.fetchform.reset();

}
addbooks(isbn:any,bname:any,author:any,publisher:any,quantity:any){
   this.bookservice.addbookslist({isbn:isbn,bookname:bname,author:author,publisher:publisher,quantity:quantity})
}
onedit(id:any,isbn:any,bname:any,author:any,publisher:any,quantity:any){
  
  this.fetchform.setValue({
    isbn:isbn,
    bname:bname,
    author:author,
    publisher:publisher,
    quantity:quantity,
   })
   this.booklist.splice(id,1)

}
ondelete(id:any){
this.bookservice.deletebooklist(id);
}
 
}
