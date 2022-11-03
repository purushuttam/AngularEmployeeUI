import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverStatus = "no server";
  serverName = "";
  username = "";
  constructor() { }

  ngOnInit(): void {
  }

  addServer(){
    this.serverStatus = "server created";
  }

  removeServer(){
    this.serverStatus = "no server";
  }

  onUpdateServer(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
