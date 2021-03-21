import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'titleCasing'
})
export class TitleCasingPipe implements PipeTransform {
    prepositions : string[] = ['of', 'the', 'and', 'an'];

    transform(value: string) {
        if(!value) {
            return null;
        }

        let strArray : string[] = value.split(' ');
        strArray = strArray.map( (v, i) => {
            let str : string = '';

            if(this.prepositions.includes(v) && i != 0)
            {
                str = v.toLowerCase();   
            }
            else
            {
                str = v.substring(0, 1).toUpperCase() + v.substring(1).toLowerCase();
            }
            return str;
        });

        return strArray.join(' ');
    }

}