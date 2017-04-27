import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {EventsAppComponent} from './events-app.component'
import {EventListComponent} from './events/events-list.component'
import {EventThumbNailComponent} from './events/events-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {EventService} from './events/shared/event.service'
import {ToastrService} from './common/toastr.service'
import {EventDetailsComponent} from './events/event-details/event-details.component'
import {CreateEventComponent} from './events/create-event.component'
import {Error404Component} from './errors/404.component'
import {appRoutes} from './routes'
import {EventRouteActivator} from './events/event-details/event-route-activator.service'
import {EventListResolver} from './events/events-list-resolver.service'
@NgModule({
    //Our app module requires the Browser module
    imports : [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
        ],
    //Our components must be registered to the module
    declarations:[
        EventsAppComponent,
        EventListComponent,
        EventThumbNailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
       
    ],
    //angulars injector is aware of this
    providers:[EventService,ToastrService,EventRouteActivator,
    {provide:'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolver
    ],
    //We need atleast one component to be specified that will be loaded during bootstraping process
    bootstrap:[EventsAppComponent]
})
// All services,components,directives must be registered to a NgModule
//Every angular application has atleat one module(because there should be a main module for every application
//, that helps to register the things you created and participate in a bootstraping process. )
export class AppModule{
    
   
}
function checkDirtyState(component : CreateEventComponent){
            
        if(component.isDirty){
                window.confirm("Sure,you want to cancel?")
        }
        return true;
    }