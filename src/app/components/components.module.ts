import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QualificiationCoursesComponent } from './qualificiation-courses/qualificiation-courses.component';
import { CreditNetworkForumComponent } from './credit-network-forum/credit-network-forum.component';
import { CreditProfessionalDesignationComponent } from './credit-professional-designation/credit-professional-designation.component';
import { RplComponent } from './rpl/rpl.component';
import { TrainingAndEventsComponent } from './training-and-events/training-and-events.component';
import { NewsAndResourcesComponent } from './news-and-resources/news-and-resources.component';
import { PartnersComponent } from './partners/partners.component';
import { MembershipComponent } from './membership/membership.component';
import { LeadersMentorshipProgramComponent } from './leaders-mentorship-program/leaders-mentorship-program.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ServicesComponent } from './services/services.component';
import { ProfessionalBodiesComponent } from './professional-bodies/professional-bodies.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AccreditedCollegesComponent } from './accredited-colleges/accredited-colleges.component';
import { EventsComponent } from './events/events.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        AboutUsComponent,
        QualificiationCoursesComponent,
        CreditNetworkForumComponent,
        CreditProfessionalDesignationComponent,
        RplComponent,
        TrainingAndEventsComponent,
        NewsAndResourcesComponent,
        PartnersComponent,
        MembershipComponent,
        LeadersMentorshipProgramComponent,
        HomeComponent,
        CoursesComponent,
        ServicesComponent,
        ProfessionalBodiesComponent,
        NewsComponent,
        ContactComponent,
        AccreditedCollegesComponent,
        EventsComponent,
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
