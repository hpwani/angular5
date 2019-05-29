import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ModelformComponent } from './modelform/modelform.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'forms',
    children: [
      {path: '', component: FormsComponent},
      {path: 'tempFrm', component: TemplateformComponent},
      {path: 'modelfrm', component: ModelformComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
