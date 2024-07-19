import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptService } from './services/script.service';
import { get } from 'scriptjs';
//import $ from 'jquery';
//import 'owl.carousel';
//import { AOS } from '../assets/scripts/aos.js';
//import lottie from 'lottie-web';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private script: ScriptService, private renderer: Renderer2) { }

//  constructor(private script: ScriptService) {

//    const animationContainer = document.getElementById("animation-uniskai") as HTMLDivElement;
//    const animationContainerUnisave = document.getElementById("animation-unisave") as HTMLDivElement;

//    const animationData = {
//      container: animationContainer,
//      renderer: "svg",
//      loop: false,
//      autoplay: false,
//      path: "/wp-content/themes/profisea-theme/animation/uniskai-img-main.json",
//    };
//    const animationDataUnisave = {
//      container: animationContainerUnisave,
//      renderer: "svg",
//      loop: false,
//      autoplay: false,
//      path: "/wp-content/themes/profisea-theme/animation/unisave-img-main.json",
//    };
//    const animationDataCTAWave = {
//      //container: animationContainerCTAWave,
//      //renderer: 'svg',
//      //loop: true,
//      //autoplay: true,
//      //path: '/wp-content/themes/profisea-theme/animation/wave-main.json',
//    };
//    const animationContainerHomeWave = document.getElementById('homeWave') as HTMLDivElement;
//    const animationDataHomeWave = {
//      //container: animationContainerHomeWave,
//      //renderer: 'svg',
//      //loop: true,
//      //autoplay: true,
//      //path: '/wp-content/themes/profisea-theme/animation/wave-main.json',
//    };

//    const options = {
//      threshold: 0.5,
//    };
//    const observer = new IntersectionObserver(playAnimationWhenVisible, options);observer.observe(animationContainer);
//    const observerUnisave = new IntersectionObserver(playAnimationWhenVisibleUnisave, options);observerUnisave.observe(animationContainerUnisave);

//    let animationContainerCTAWave = document.getElementById('ctaWave') as HTMLDivElement;
//    let animHomeWave = null;
//    let animCTAWave = null; 



//    function playAnimationWhenVisible(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
//      entries.forEach((entry) => {
//        if (entry.isIntersecting) {
//        /*  anim.play();*/
//          observer.unobserve(entry.target);
//        }
//      });
//    }
//    function playAnimationWhenVisibleUnisave(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
//      entries.forEach((entry) => {
//        if (entry.isIntersecting) {
//         /* animUnisave.play();*/
//          observer.unobserve(entry.target);
//        }
//      });
//    }




//    $(document).ready(function () {
//      const owl = $('.carousel-trust');
//      owl.owlCarousel({
//        margin: 10,
//        nav: false,
//        loop: true,
//        autoplay: true,
//        autoplayTimeout: 1000,
//        autoplaySpeed: 3000,
//        autoplayHoverPause: false,
//        slideTransition: 'linear',
//        responsive: {
//          0: {
//            items: 3
//          },
//          600: {
//            items: 4
//          },
//          1000: {
//            items: 7
//          },
//          1400: {
//            items: 10
//          },
//          1800: {
//            items: 16
//          }
//        }
//      });
//    });
//    $(document).ready(function () {
//      $('.fadeOutTop').owlCarousel({
//        items: 1,
//        animateOut: 'fadeOut',
//        loop: true,
//        autoplay: true,
//        autoplayTimeout: 5000,
//        autoplaySpeed: 2000,
//        slideTransition: 'linear',
//        margin: 10,
//      });
//    });
//    const widthWindow: number = $(document).width() || 0;
//    if (widthWindow > 991) {
//      let action: boolean | string = false;
//      let clicked: boolean = false;

//      const Owl = {
//        init: function (): void {
//          this.carousel();
//        },
//        carousel: function (): void {
//          let owl: JQuery<HTMLElement>;
//          $(document).ready(function () {
//            owl = $('.fadeOut').owlCarousel({
//              items: 1,
//              autoplay: true,
//              autoplayTimeout: 7000,
//              autoplaySpeed: 2000,
//              center: true,
//              autoplayHoverPause: true,
//              dots: true,
//              loop: true,
//              margin: 10,
//              smartSpeed: 500,
//              animateOut: 'fadeOut',
//              animateIn: 'fadeIn',
//              dotsContainer: '.carousel-pillars-nav-ul',
//              responsive: {
//                0: {
//                  margin: 10,
//                  autoplay: false,
//                },
//                600: {
//                  margin: 40
//                },
//                767: {
//                  animateOut: 'fadeOut',
//                  animateIn: 'fadeIn',
//                  mergeFit: false,
//                  items: 2,
//                  margin: 20,
//                },
//                991: {
//                },
//                1000: {
//                  margin: 10
//                }
//              },
//              navText: ['prev', 'next'],
//            });

//            $('.owl-next').on('click', function () {
//              action = 'next';
//            });

//            $('.owl-prev').on('click', function () {
//              action = 'prev';
//            });

//            $('.carousel-pillars-nav').on('click', 'li', function (e) {
//              owl.trigger('to.owl.carousel', [$(this).index(), 300]);
//            });
//          });
//        }
//      };

//      $(document).ready(function () {
//        Owl.init();
//      });
//    } else {
//      let maxHeight: number = 0;
//      $('.text-pillars').each(function () {
//        const currentHeight: number = $(this).height() || 0;
//        if (currentHeight > maxHeight) {
//          maxHeight = currentHeight;
//        }
//      });
//      $('.text-pillars').height(maxHeight);
//    }
//    window.addEventListener("load", function (event) {
//      jQuery(".cfx_form_main,.wpcf7-form,.wpforms-form,.gform_wrapper form").each(function () {
//        const form: JQuery<HTMLElement> = jQuery(this);
//        let screen_width: number = 0;
//        let screen_height: number = 0;

//        if (screen_width === 0) {
//          if (window.screen) {
//            screen_width = window.screen.width;
//          } else {
//            screen_width = jQuery(window).width() || 0;
//          }
//        }

//        if (screen_height === 0) {
//          if (window.screen) {
//            screen_height = window.screen.height;
//          } else {
//            screen_height = jQuery(window).height() || 0;
//          }
//        }

//        form.append(`<input type="hidden" name="vx_width" value="${screen_width}">`);
//        form.append(`<input type="hidden" name="vx_height" value="${screen_height}">`);
//        form.append(`<input type="hidden" name="vx_url" value="${window.location.href}">`);
//      });
//    });
//    document.addEventListener("DOMContentLoaded", function () {
//      const words: NodeListOf<HTMLElement> = document.querySelectorAll('.cd-words-wrapper span');
//      let index: number = 0;

//      function changeWord(): void {
//        words[index].classList.remove('is-visible');
//        words[index].classList.add('is-hidden');
//        index = (index + 1) % words.length;
//        words[index].classList.remove('is-hidden');
//        words[index].classList.add('is-visible');
//      }

//      setInterval(changeWord, 1500);
//    });
//    document.addEventListener('DOMContentLoaded', function () {
//      const fileInput: HTMLInputElement | null = document.getElementById('fileInput') as HTMLInputElement;
//      if (fileInput) {
//        fileInput.addEventListener('change', function () {
//          fileSelected(fileInput);
//        });
//      }
//    });



//    function fileSelected(input: HTMLInputElement): void {
//      const fileInfo = document.getElementById("file-info-modal") as HTMLElement;
//      const fileDelete = document.getElementById("file-delete-popup") as HTMLElement;
//      if (input.files && input.files.length > 0) {
//        const fileName = input.files[0].name;
//        fileInfo.innerHTML = `${fileName}`;
//        fileDelete.classList.add("show");
//      } else {
//        fileInfo.innerHTML = 'File is not chosen';
//        fileDelete.classList.remove("show");
//      }
//    }
//    function deleteFilePopup(): void {
//      const fileInput = document.getElementById('fileInput') as HTMLInputElement;
//      fileInput.value = '';
//      fileSelected(fileInput);
//    }
//    document.addEventListener('DOMContentLoaded', (): void => {
//      const fileInput = document.getElementById('fileInputFooter') as HTMLInputElement | null;
//      if (fileInput) {
//        fileInput.addEventListener('change', (): void => {
//          fileSelectedFooter(fileInput);
//        });
//      }
//    });
//    function fileSelectedFooter(input: HTMLInputElement): void {
//      const fileInfo = document.getElementById("file-info-footer") as HTMLElement;
//      const fileDelete = document.getElementById("file-delete-footer") as HTMLElement;
//      if (input.files && input.files.length > 0) {
//        const fileName = input.files[0].name;
//        fileInfo.innerHTML = `${fileName}`;
//        fileDelete.classList.add("show");
//      } else {
//        fileInfo.innerHTML = 'File is not chosen';
//        fileDelete.classList.remove("show");
//      }
//    }
//    function deleteFile(): void {
//      const fileInput = document.getElementById('fileInputFooter') as HTMLInputElement;
//      fileInput.value = '';
//      fileSelectedFooter(fileInput);
//    }







//    document.addEventListener('DOMContentLoaded', () => {
//      const fileInput = document.getElementById('fileInputCareers') as HTMLInputElement;
//      if (fileInput) {
//        fileInput.addEventListener('change', () => {
//          fileSelectedCareers(fileInput);
//        });
//      }
//    });
//    function fileSelectedCareers(input: HTMLInputElement): void {
//      const fileInfo = document.getElementById("file-info-careers") as HTMLElement;
//      const fileDelete = document.getElementById("file-delete-career") as HTMLElement;
//      if (input.files && input.files.length > 0) {
//        const fileName = input.files[0].name;
//        fileInfo.innerHTML = `${fileName}`;
//        fileDelete.classList.add("show");
//        fileInfo.classList.add("sh");
//      } else {
//        fileInfo.innerHTML = 'File is not chosen';
//        fileDelete.classList.remove("show");
//        fileInfo.classList.remove("sh");
//      }
//    }
//    function deleteFileCareer(): void {
//      const fileInput = document.getElementById('fileInputCareers') as HTMLInputElement;
//      fileInput.value = '';
//      fileSelectedCareers(fileInput);
//    }
//    document.addEventListener('DOMContentLoaded', () => {
//      const counters = document.querySelectorAll('.counter-n');
//      const durationInSeconds = 3 * 1000; // Duration in milliseconds

//      const options: IntersectionObserverInit = {
//        threshold: 0.5 // Visibility threshold for Intersection Observer
//      };

//      const observer = new IntersectionObserver((entries, observer) => {
//        entries.forEach(entry => {
//          if (entry.isIntersecting) {
//            startCounter(entry.target as HTMLElement);
//            observer.unobserve(entry.target);
//          }
//        });
//      }, options);

//      counters.forEach(counterElement => {
//        observer.observe(counterElement);
//      });

//      function startCounter(element: HTMLElement): void {
//        const targetNum = parseInt(element.getAttribute('data-num') || '0', 10);
//        let currentNum = 0;
//        const startTime = performance.now();

//        function updateCounter(timestamp: number): void {
//          const progress = (timestamp - startTime) / durationInSeconds;

//          if (progress < 1) {
//            currentNum = Math.floor(progress * targetNum);
//            element.innerText = currentNum.toString();
//            requestAnimationFrame(updateCounter);
//          } else {
//            element.innerText = targetNum.toString();
//          }
//        }

//        requestAnimationFrame(updateCounter);
//      }
//    });



//    function handleResize(): void {
//      setTimeout(() => { AOS.refresh(); }, 500);
//    }
//    window.addEventListener("resize", handleResize);

//    AOS.init();

//    $('.scroll-to').on('click', function (e: JQuery.ClickEvent) {
//      e.preventDefault();

//      $('html, body').animate({
//        /*scrollTop: $($(this).attr('href')).offset().top - 60*/
//      }, 500, 'linear');
//    });

//    $('.link-modal').click(function (e: JQuery.ClickEvent) {
//      e.preventDefault();
//      const modalID = $(this).attr('href');
//      $(modalID).addClass('show');
//      $('body').addClass('overflow-hidden');
//    });

//    $('.modal .close').click(function () {
//      $('.modal').removeClass('show');
//      $('body').removeClass('overflow-hidden');
//    });

//    //small
//    const animationContainerSuccess = document.getElementById('animation-success');
//    const animationDataSuccess: lottie.AnimationConfigWithPath = {
//      container: animationContainerSuccess,
//      renderer: 'svg',
//      loop: false,
//      autoplay: false,
//      path: '/wp-content/themes/profisea-theme/animation/success.json',
//    };
//    /*const animSuccess = lottie.loadAnimation(animationDataSuccess);*/

//    //modal
//    const animationContainerSuccess2 = document.getElementById('animation-success-big');
//    const animationDataSuccess2: lottie.AnimationConfigWithPath = {
//      container: animationContainerSuccess2,
//      renderer: 'svg',
//      loop: false,
//      autoplay: false,
//      path: '/wp-content/themes/profisea-theme/animation/success.json',
//    };
//    /* const animSuccess2 = lottie.loadAnimation(animationDataSuccess2);*/
//    document.addEventListener('wpcf7mailsent', function (event) {
//      if ('231' == event.detail.contactFormId) {
//        document.querySelector('.modal-small').classList.add('show');
//        animSuccess.play();
//        setTimeout(function () {
//          document.querySelector('.modal-small').classList.remove('show');
//        }, 3000);
//        document.getElementById('file-info-footer').innerText = 'File is not chosen';
//        document.querySelector('.deletefile').classList.remove('show');
//      }
//      if ('233' == event.detail.contactFormId) {
//        document.querySelector('.modal-small').classList.add('show');
//        animSuccess.play();
//        setTimeout(function () {
//          document.querySelector('.modal-small').classList.remove('show');
//        }, 3000);
//        document.getElementById('file-info-careers').innerText = 'File is not chosen';
//        document.querySelector('.deletefile').classList.remove('show');
//      }
//      if ('232' == event.detail.contactFormId) {
//        document.querySelector('.modal-small').classList.add('show');
//        animSuccess.play();
//        setTimeout(function () {
//          document.querySelector('.modal-small').classList.remove('show');
//        }, 3000);
//        document.getElementById('file-info-footer').innerText = 'File is not chosen';
//        document.querySelector('.deletefile').classList.remove('show');
//      }
//      if ('230' == event.detail.contactFormId) {
//        document.querySelector('.modal .success-message').classList.add('show');
//        animSuccess2.play();
//        setTimeout(function () {
//          document.querySelector('.modal .success-message').classList.remove('show');
//          document.querySelector('.modal').classList.remove('show');
//          document.querySelector('body').classList.remove('overflow-hidden');
//        }, 5000);
//        document.getElementById('file-delete-popup').innerText = 'File is not chosen';
//        document.querySelector('.deletefile').classList.remove('show');
//      }
//      if ('10036' == event.detail.contactFormId) {
//        document.querySelector('.modal-small').classList.add('show');
//        animSuccess.play();
//        setTimeout(function () {
//          document.querySelector('.modal-small').classList.remove('show');
//        }, 3000);
//      }
//      if ('10107' == event.detail.contactFormId) {
//        document.querySelector('.modal-small').classList.add('show');
//        animSuccess.play();
//        setTimeout(function () {
//          document.querySelector('.modal-small').classList.remove('show');
//        }, 3000);
//      }
//      if ('10195' == event.detail.contactFormId) {
//        document.querySelector('.modal-small').classList.add('show');
//        animSuccess.play();
//        setTimeout(function () {
//          document.querySelector('.modal-small').classList.remove('show');
//        }, 3000);
//      }
//    }, false);

//=

//    $(document).mouseup(function (e: JQuery.MouseUpEvent) {
//      const div = $("#modalForm .content");
//      if (!div.is(e.target) && div.has(e.target).length === 0) {
//        $('.modal').removeClass('show');
//        $('body').removeClass('overflow-hidden');
//      }
//    });

//    const _linkedin_partner_id = "5140609";
//    (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
//    (window as any)._linkedin_data_partner_ids.push(_linkedin_partner_id);

//    (function (l: any) {
//      if (!l) {
//        (window as any).lintrk = function (a: any, b: any) { (window as any).lintrk.q.push([a, b]) };
//        (window as any).lintrk.q = []
//      }
//      const s = document.getElementsByTagName("script")[0];
//      const b = document.createElement("script");
//      b.type = "text/javascript";
//      b.async = true;
//      b.src = ""; /*https://snap.licdn.com/li.lms-analytics/insight.min.js";*/
//      s.parentNode?.insertBefore(b, s);
//    })((window as any).lintrk);





//}
   
  ngOnInit(): void {
    /*
    get("https://www.profisea.com/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2", () => {});
    get("https://www.profisea.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.14.0", () => { });
    get("https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js", () => { });
    get("https://unpkg.com/aos@2.3.1/dist/aos.js", () => { });
    get("https://www.profisea.com/wp-content/themes/profisea-theme/js/global.js?ver=1.6", () => { });
    get("https://www.profisea.com/wp-content/themes/profisea-theme/libs/owl/owl.carousel.min.js", () => { });
    get("https://www.profisea.com/wp-content/themes/profisea-theme/js/jquery.mobile.custom.min.js", () => { });
    get("https://www.profisea.com/wp-content/themes/profisea-theme/js/home.js", () => { });
    /* 
      this.script.load('wp-polyfill-inert',
        'regenerator-runtime',
        'home',
        'wp-polyfill',
        'jquery',
        'aos',
        'global',
        'owl-carousel',
        'jquery-mobile',
        'main')
        .then(data => {
          console.log('script loaded ', data);
        }).catch(error => console.log(error));

*/

    //const script0 = this.renderer.createElement('script');
    //script0.src = `https://www.profisea.com/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2`;
    //this.renderer.appendChild(document.head, script0);

    const script1 = this.renderer.createElement('script');
    script1.src = `https://www.profisea.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.14.0`;
    this.renderer.appendChild(document.head, script1);

    const script2 = this.renderer.createElement('script');
    script2.src = `https://www.profisea.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0`;
    this.renderer.appendChild(document.head, script2);

    const script3 = this.renderer.createElement('script');
    script3.src = `https://www.profisea.com/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2`;
    this.renderer.appendChild(document.head, script3);

    const script4 = this.renderer.createElement('script');
    script4.src = `https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js`;
    this.renderer.appendChild(document.head, script4);

    const script5 = this.renderer.createElement('script');
    script5.src = `https://unpkg.com/aos@2.3.1/dist/aos.js`;
    this.renderer.appendChild(document.head, script5);

    const script6 = this.renderer.createElement('script');
    script6.src = `https://www.profisea.com/wp-content/themes/profisea-theme/js/global.js?ver=1.6`;
    this.renderer.appendChild(document.head, script6);

    const script7 = this.renderer.createElement('script');
    script7.src = `https://www.profisea.com/wp-content/themes/profisea-theme/libs/owl/owl.carousel.min.js`;
    this.renderer.appendChild(document.head, script7);

    const script8 = this.renderer.createElement('script');
    script8.src = `https://www.profisea.com/wp-content/themes/profisea-theme/js/jquery.mobile.custom.min.js`;
    this.renderer.appendChild(document.head, script8);

    const script9 = this.renderer.createElement('script');
    script9.src = `https://www.profisea.com/wp-content/themes/profisea-theme/js/home.js`;
    this.renderer.appendChild(document.head, script9);
  }
}
