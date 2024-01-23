import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileDisplay',
  pure: true,
})
export class FileDisplayPipe implements PipeTransform {

  transform(value: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(value);
      reader.onload = (_event) => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });
  }
}
