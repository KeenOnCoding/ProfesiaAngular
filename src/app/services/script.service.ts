import { Injectable } from "@angular/core";

declare var document: any;

@Injectable()
export class ScriptService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }


  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      //resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
      else {
        //load script
        let script = document.createElement('script');
        //script.type = 'text/javascript';
        //script.async = true;
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
          script.onreadystatechange = () => {
            if (script.readyState === "loaded" || script.readyState === "complete") {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {  //Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
 
        document.getElementsByTagName('head', 'header', 'body')[0].appendChild(script);
      }
    });
  }

} interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  { name: 'wp-polyfill-inert', src: 'https://www.profisea.com/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2' },
  { name: 'regenerator-runtime', src: 'https://www.profisea.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.14.0' },
  { name: 'wp-polyfill', src: 'https://www.profisea.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0' },
  { name: 'jquery', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js' },
  { name: 'aos', src: 'https://unpkg.com/aos@2.3.1/dist/aos.js' },
  { name: 'global', src: 'https://www.profisea.com/wp-content/themes/profisea-theme/js/global.js?ver=1.6' },
  { name: 'owl-carousel', src: 'https://www.profisea.com/wp-content/themes/profisea-theme/libs/owl/owl.carousel.min.js' },
  { name: 'jquery-mobile', src: 'https://www.profisea.com/wp-content/themes/profisea-theme/js/jquery.mobile.custom.min.js' },
  {
    name: 'home', src: 'https://www.profisea.com/wp-content/themes/profisea-theme/js/home.js',
  },
  {
    name: 'main', src: 'main.js',
  }
];
