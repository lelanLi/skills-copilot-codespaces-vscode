import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentListComponent } from './agent-list/agent-list.component';


@NgModule({
  declarations: [
    AgentListComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
