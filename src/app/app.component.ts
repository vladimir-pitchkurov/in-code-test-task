import {Component, OnInit} from '@angular/core';
import {ClientsBaseService} from './services/clients-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public userList;
  public activeUser;
  public searchString = '';

  constructor(private service: ClientsBaseService) { }

  ngOnInit() {
    this.userList = this.service.getClients();
    this.activeUser = this.userList[0];
  }

  toggleActiveCli(cli) {
    this.activeUser = cli;
  }

  isActiveCli(cli) {
    return (cli.general.firstName === this.activeUser.general.firstName) &&
      (cli.general.lastName === this.activeUser.general.lastName) &&
      (cli.contact.email === this.activeUser.contact.email) &&
      (cli.contact.phone === this.activeUser.contact.phone);
  }

  changeActiveUser() {
    this.activeUser = this.userList[0];
  }
}
