
import {Component,Input} from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template:`
        <div class="well hoverwall thumbnail" [routerLink] = "['/events',event.id]">
            <h2>Name:{{event.name}}</h2>
            <div>Date{{event.date}}</div>
            <div *ngIf="event?.time">Time{{event.time}}</div>
            <div [hidden]="!event?.price">Price:{{event.price}}</div>
           
        </div>
    `,
    // you can add styles to template here, provided by angular
    styles:[
        `      
                .thumbnail{min-height:210px;}
                .pad-left {margin-left:10px;}
                .well div{color:#bbb;}
        `
    ]
})


export class EventThumbNailComponent{
   // while giving data to child component
    @Input() event: any
  
}