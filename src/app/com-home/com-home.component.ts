import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-com-home',
  standalone: true,
  imports: [],
  templateUrl: './com-home.component.html',
  styleUrl: './com-home.component.css'
})
export class ComHomeComponent {
  visible: boolean = true;
  letterCount: number = 1;
  waiting: boolean = false;
  colors: string[] = ['var(--main-color)', 'var(--main-color)', 'var(--main-color)'];
  words: string[] = ["Y soy programador", "Y soy ingeniero en TI", "Y soy tu mejor opción ;)"];
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Verifica si el código se está ejecutando en el navegador
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Solo ejecuta la función si está en el navegador
    if (this.isBrowser) {
      this.consoleText(this.words, 'text', this.colors);
    }
  }

  consoleText(words: string[], id: string, colors: string[]): void {
    if (colors === undefined || colors.length === 0) {
      colors = ['#fff'];
    }

    const target = document.getElementById(id);
    const con = document.getElementById('console');
    let letterCount = this.letterCount;
    let waiting = this.waiting;
    let x = 1;

    if (target) {
      target.style.color = colors[0];
    }

    setInterval(() => {
      if (letterCount === 0 && !waiting) {
        waiting = true;
        if (target) {
          target.innerHTML = words[0].substring(0, letterCount);
        }

        setTimeout(() => {
          const usedColor = colors.shift();
          if (usedColor) {
            colors.push(usedColor);
          }
          const usedWord = words.shift();
          if (usedWord) {
            words.push(usedWord);
          }
          x = 1;
          if (target) {
            target.style.color = colors[0];
          }
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && !waiting) {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (!waiting) {
        if (target) {
          target.innerHTML = words[0].substring(0, letterCount);
        }
        letterCount += x;
      }
    }, 120);

    setInterval(() => {
      if (this.visible) {
        if (con) {
          con.classList.add('hidden');
        }
        this.visible = false;
      } else {
        if (con) {
          con.classList.remove('hidden');
        }
        this.visible = true;
      }
    }, 400);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
