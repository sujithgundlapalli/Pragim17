import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'employeeTitle'
})
export class employeeTitlePipe implements PipeTransform{
    transform(value: string, gender : string): string {
        if(gender.toLowerCase()=='Male')
        {
            return "Mr. "+value;
        }
        else  
        {
            return "Miss. "+value;
        }
    }

}   