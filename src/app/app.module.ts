import { MetaReducer } from './../../node_modules/@ngrx/store/src/models.d';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NovoComponent } from './components/novo/novo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { EfetivacaoPipe } from './pipes/efetivacao.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { hydrationMetaReducer } from './rehydrate_reducer';

const metaReducers: MetaReducer[] = [hydrationMetaReducer ]
@NgModule({
  declarations: [
    AppComponent,
    SexoPipe,
    EfetivacaoPipe,
    ToolbarComponent,
    NovoComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
