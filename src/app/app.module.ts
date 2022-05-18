import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ModalComponent } from './components/modal/modal.component';
import { ToastComponent } from './components/toast/toast.component';
import { HeaderComponent } from './components/header/header/header.component';
import { HeaderLeftComponent } from './components/header/header/header-left/header-left.component';
import { HeaderMiddleComponent } from './components/header/header/header-middle/header-middle.component';
import { HeaderRightComponent } from './components/header/header/header-right/header-right.component';
import { NavComponent } from './components/nav/nav/nav.component';
import { MainRightComponent } from './components/main-right/main-right/main-right.component';
import { MainRightFilmSubtitleComponent } from './components/main-right/main-right/main-right-film-subtitle/main-right-film-subtitle.component';
import { MainRightSerialSubtitleComponent } from './components/main-right/main-right/main-right-serial-subtitle/main-right-serial-subtitle.component';
import { MainRightSoonComponent } from './components/main-right/main-right/main-right-soon/main-right-soon.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageCarouselComponent } from './components/homepage/homepage-carousel/homepage-carousel.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainRightSurveyComponent } from './components/main-right/main-right/main-right-dynamic-container/main-right-survey/main-right-survey.component';
import { MainRightAnswerQuestionComponent } from './components/main-right/main-right/main-right-dynamic-container/main-right-answer-question/main-right-answer-question.component';
import { MainRightSubtitleSenderComponent } from './components/main-right/main-right/main-right-dynamic-container/main-right-subtitle-sender/main-right-subtitle-sender.component';
import { MainRightDetailsComponent } from './components/main-right/main-right/main-right-details/main-right-details.component';
import { MainRightDynamicContainerComponent } from './components/main-right/main-right/main-right-dynamic-container/main-right-dynamic-container.component';
import { HomepageNewReleasedComponent } from './components/homepage/homepage-new-released/homepage-new-released.component';
import { HomepageLastReleasedFilmFrameComponent } from './components/homepage/homepage-last-released-film-frame/homepage-last-released-film-frame.component';
import { HomepageFilmAnalysisComponent } from './components/homepage/homepage-film-analysis/homepage-film-analysis.component';
import { HomepageNewReleasedArtistComponent } from './components/homepage/homepage-new-released-artist/homepage-new-released-artist.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { MobileNavComponent } from './components/nav/mobile-nav/mobile-nav.component';

registerLocaleData(localeTr, 'tr')

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ToastComponent,
    HeaderComponent,
    HeaderLeftComponent,
    HeaderMiddleComponent,
    HeaderRightComponent,
    NavComponent,
    MainRightComponent,
    MainRightFilmSubtitleComponent,
    MainRightSerialSubtitleComponent,
    MainRightSoonComponent,
    HomepageComponent,
    HomepageCarouselComponent,
    NotfoundComponent,
    MainRightSurveyComponent,
    MainRightAnswerQuestionComponent,
    MainRightSubtitleSenderComponent,
    MainRightDetailsComponent,
    MainRightDynamicContainerComponent,
    HomepageNewReleasedComponent,
    HomepageLastReleasedFilmFrameComponent,
    HomepageFilmAnalysisComponent,
    HomepageNewReleasedArtistComponent,
    FooterComponent,
    TopBannerComponent,
    MobileNavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{
    provide:LOCALE_ID, useValue:'tr',
  },
  {
    provide: 'apiUrl', useValue: 'http://localhost:3000/'
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
