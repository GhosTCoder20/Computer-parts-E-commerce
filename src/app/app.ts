import { Component } from '@angular/core';
import { RouterOutlet,provideRouter } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Header } from './Shared/Header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Header, FontAwesomeModule],
  templateUrl: './app.html',
  styles: `
    :host{
      direction:rtl;
    }
    /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
  `,
})
export class App {}
