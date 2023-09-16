import { Component, OnInit } from '@angular/core';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.sass']
})
export class NextpageComponent {

  icon=faCaretRight;

  constructor(){

  }
  
  ngOnInit(){
    var mains = document.querySelectorAll(".main")
    mains.forEach(main => {
      var content = main.getElementsByClassName("paragraph");
      var icon = main.getElementsByClassName("icon")
      main.addEventListener("click", ()=>{
        content[0].classList.toggle("active")
        icon[0].classList.toggle("active")
      })
    });    
  }
}
