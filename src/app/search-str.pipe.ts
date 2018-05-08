import { Pipe, PipeTransform } from '@angular/core';
import {isUndefined} from "util";

@Pipe({
  name: 'searchStr'
})
export class SearchStrPipe implements PipeTransform {

  transform(clients: any, searchString: any): any {

    if(isUndefined(clients) || clients === undefined){
      return ;
    }
    if(isUndefined(searchString) || searchString === undefined){return clients;}

    return clients.filter((user) => {
      return (user.general.firstName.toLowerCase().includes(searchString.toLowerCase()))||
        (user.general.lastName.toLowerCase().includes(searchString.toLowerCase()))||
        (user.job.company.toLowerCase().includes(searchString.toLowerCase()))||
        (user.job.title.toLowerCase().includes(searchString.toLowerCase()))||
        (user.contact.email.toLowerCase().includes(searchString.toLowerCase()))||
        (user.contact.phone.toLowerCase().includes(searchString.toLowerCase()))||
        (user.address.street.toLowerCase().includes(searchString.toLowerCase()))||
        (user.address.city.toLowerCase().includes(searchString.toLowerCase()))||
        (user.address.zipCode.toLowerCase().includes(searchString.toLowerCase()))||
        (user.address.country.toLowerCase().includes(searchString.toLowerCase()));
    });
  }

}
