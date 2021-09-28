import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesService } from 'src/app/services/courses.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { PlayComponent } from './play/play.component';
import { DataService } from './services/data.service';

// import { FirebaseService } from './services/firebase.service';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [AppComponent, CoursesComponent, PlayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [CoursesService, DataService, //FirebaseService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}