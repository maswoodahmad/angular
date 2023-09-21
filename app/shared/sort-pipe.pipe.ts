import { Pipe, PipeTransform } from '@angular/core';
import { ICity } from '../Data/city.model';

@Pipe({
  name: 'sort'
})
export class SortPipePipe implements PipeTransform {

  transform(value : ICity[]):ICity[]  {
    if(value){
      return value.sort((a: ICity,b:ICity)=>{
       if(a.name < b.name){
        return -1;
       }
       else if(b.name < a.name){
        return 1;
       }
       return 0;
      })
    }
    return [];
  }

}
