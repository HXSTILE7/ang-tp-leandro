import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { HistorialComponent } from './historial/historial.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {path: '', component: TablaComponent },
  {path: 'historial', component: HistorialComponent },
  {path: 'noticias', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
