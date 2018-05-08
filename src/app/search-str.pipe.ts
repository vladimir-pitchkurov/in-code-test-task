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
      return (user.general.firstName.toLowerCase().includes(searchString.toLowerCase()))||(true)||(true)||(true);
    });
  }

}
