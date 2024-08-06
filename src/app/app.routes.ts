import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Start Framework' },
    { path: 'home', component: HomeComponent, title: 'Start Framework' },
    { path: 'about', component: AboutComponent, title: 'About' },
    { path: 'contact', component: ContactComponent, title: 'Contact' },
    { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
    { path: '**', component: PageNotFoundComponent, title: 'Page not found !!' },
];
