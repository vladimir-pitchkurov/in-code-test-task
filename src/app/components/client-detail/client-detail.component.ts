import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {isUndefined} from "util";
import {ClientsBaseService} from "../../services/clients-base.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit, OnChanges {

  public activeUser;

  @Input()
  set activeUser1(activeUser1) {
    if (!isUndefined(activeUser1)) {
      this.activeUser = activeUser1;
    } else if (isUndefined(this.activeUser) && !isUndefined(this.userList)) {
      this.changeActiveUser();
    } else {
      this.activeUser = this.service.getEmptyUser();
    }
  };

  @Input() userList: any;

  constructor(private service: ClientsBaseService) { }

  ngOnInit() { }

  ngOnChanges() {
    if (!isUndefined(this.userList && this.activeUser)) {
      if (!this.listContain()) {
        this.changeActiveUser();
      }
    } else if (isUndefined(this.activeUser) && !isUndefined(this.userList)) {
      this.changeActiveUser();
    } else {
      this.activeUser = this.service.getEmptyUser();
    }
  }

  listContain() {
    let isContain = false;
    for (let i = 0; i < this.userList.length; i++) {
      if (this.isActiveCli(this.userList[i])) {
        isContain = true;
      }
    }
    return isContain;
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
