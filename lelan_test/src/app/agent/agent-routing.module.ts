import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentListComponent } from './agent-list/agent-list.component';

const routes: Routes = [
  { path: 'agentList', component: AgentListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
