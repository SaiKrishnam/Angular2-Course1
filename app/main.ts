//Angulars bootsrap function
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
//The app that we want to bootstrap
import {AppModule} from './app.module'

//Registering to our application which Module to Bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);