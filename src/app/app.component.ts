import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent 
{
  data : any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('cloetinder.json').subscribe((data:any)=>
    {
      this.data = data;
        /*const decoder = new TextDecoder("utf-8");
        const encoder = new TextEncoder();

        this.data = data.map((obj:any) => {
          const newObj: any = {};
          for (const key in obj) {
            if (typeof obj[key] === 'string') {
              // Encode en Uint8Array puis redécode avec l'encodage cible
              const encoded = encoder.encode(obj[key]);
              newObj[key] = decoder.decode(encoded);
            } else {
              newObj[key] = obj[key]; // Conserve les autres types de valeurs
            }
          }
          return newObj;
        });*/
        let tmp = setInterval(()=>{window.scrollTo({top:1000000});clearInterval(tmp);},200);
    });
  }
}
