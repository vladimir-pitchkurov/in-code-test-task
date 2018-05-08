import {Component, OnInit} from '@angular/core';
import {ClientsBaseService} from './services/clients-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public userList;
  public activeUser;
  public searchString = '';

  constructor(private service: ClientsBaseService) {}

  ngOnInit() {
    this.userList = this.service.getClients();
    this.activeUser = this.userList[0];
  }



}
