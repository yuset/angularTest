import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BlogComponent } from './blog/blog.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { ContactComponent } from './contact/contact.component';


export const appRoutes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'contact', component: ContactComponent }
];


export const app_routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);