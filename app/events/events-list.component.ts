
import {Component,OnInit} from '@angular/core';
import {EventService} from './shared/event.service'
import {ToastrService} from '../common/toastr.service'
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'events-list',
    template:`
        <div >
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail  [event]="event" (click)=clickMe(event.name)></event-thumbnail>
                </div>
            </div>
        </div>
    `
    
})

//so OnIt Becomes compulsory
export class EventListComponent implements OnInit{
  private eventService : EventService;
  private toastr : ToastrService
  events: any;
  
   //data from API
  constructor(eventService:EventService,toastr : ToastrService,private route: ActivatedRoute){
     this.eventService = eventService;
     this.toastr = toastr;
  }
  //Life Cycle Hooks- Executed when copmonent loads
    ngOnInit() {
       this.events = this.route.snapshot.data['events'];
    }

clickMe(eventName){
    //
    this.toastr.success(eventName);
}

}