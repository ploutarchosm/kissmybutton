import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { formatNumber } from "@angular/common";

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(value: number): string {
    return formatNumber(value,this.locale, '1.0-0').replace(',', '');
  }

}
