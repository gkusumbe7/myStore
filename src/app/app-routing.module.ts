import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { ReportsComponent } from './components/reports/reports.component';
import { StockManagementComponent } from './components/stock-management/stock-management.component';

const routes: Routes = [
    { path : '' , component:HomeComponent },
    { path : 'stocklist' , component:StockListComponent },
    { path : 'stockmanagement' , component:StockManagementComponent },
    { path : 'reports' , component:ReportsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
