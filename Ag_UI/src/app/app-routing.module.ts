import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisMethodsComponent } from './analysis-methods/analysis-methods.component';
import { SequenceTemplateComponent } from './sequence-template/sequence-template.component';


const routes: Routes = [
  {path:'analysisMethods',component: AnalysisMethodsComponent},
  {path:'sequenceTemplate',component: SequenceTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
