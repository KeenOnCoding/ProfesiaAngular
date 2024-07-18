
  const animationContainerCTAWave = document.getElementById('ctaWave');
  const animationDataCTAWave = {
    //container: animationContainerCTAWave,
    //renderer: 'svg',
    //loop: true,
    //autoplay: true,
    //path: '/wp-content/themes/profisea-theme/animation/wave-main.json',
  };
  const animCTAWave = null;/*lottie.loadAnimation(animationDataCTAWave);*/
  /*animCTAWave.play();*/

  const animationContainerHomeWave = document.getElementById('homeWave');
  const animationDataHomeWave = {
    //container: animationContainerHomeWave,
    //renderer: 'svg',
    //loop: true,
    //autoplay: true,
    //path: '/wp-content/themes/profisea-theme/animation/wave-main.json',
  };
  const animHomeWave = null;
  /*lottie.loadAnimation(animationDataHomeWave);*/
  /*animHomeWave.play();*/

  const animationContainer = document.getElementById("animation-uniskai");
  const animationContainerUnisave = document.getElementById("animation-unisave");

  const animationData = {
    container: animationContainer,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "/wp-content/themes/profisea-theme/animation/uniskai-img-main.json",
    };

  const animationDataUnisave = {
    container: animationContainerUnisave,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "/wp-content/themes/profisea-theme/animation/unisave-img-main.json",
    };

  /*const anim = lottie.loadAnimation(animationData);*/
  /* const animUnisave = lottie.loadAnimation(animationDataUnisave);*/

  function playAnimationWhenVisible(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anim.play();
        observer.unobserve(entry.target);
      }
    });
    }

  function playAnimationWhenVisibleUnisave(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animUnisave.play();
        observer.unobserve(entry.target);
      }
    });
    }

  const options = {
    threshold: 0.5,
    };
  const observer = new IntersectionObserver(playAnimationWhenVisible, options);
  observer.observe(animationContainer);

  const observerUnisave = new IntersectionObserver(playAnimationWhenVisibleUnisave, options);
  observerUnisave.observe(animationContainerUnisave);

  $(document).ready(function () {
      var owl = $('.carousel-trust');
  owl.owlCarousel({
    margin: 10,
  nav: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplaySpeed: 3000,
  autoplayHoverPause: false,
  slideTransition: 'linear',
  responsive: {
    0: {
    items: 3
          },
  600: {
    items: 4
          },
  1000: {
    items: 7
          },
  1400: {
    items: 10
          },
  1800: {
    items: 16
          }
        }
      });
    });
  $(document).ready(function ($) {
    $('.fadeOutTop').owlCarousel({
      items: 1,
      animateOut: 'fadeOut',
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 2000,
      slideTransition: 'linear',
      margin: 10,
    });
    });

  var widthWindow = $(document).width();

    if (widthWindow > 991) {
    let action = false,
  clicked = false;
  let Owl = {
    init: function () {
    Owl.carousel();
        },
  carousel: function () {
    let owl;
  $(document).ready(function () {
    owl = $('.fadeOut').owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 7000,
      autoplaySpeed: 2000,
      center: true,
      autoplayHoverPause: true,
      dots: true,
      loop: true,
      margin: 10,
      smartSpeed: 500,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      dotsContainer: '.carousel-pillars-nav-ul',
      responsive: {
        0: {
          margin: 10,
          autoplay: false,
        },
        600: {
          margin: 40
        },
        767: {
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          mergeFit: false,
          items: 2,
          margin: 20,
        },
        991: {

        },
        1000: {
          margin: 10
        }
      },
      navText: ['prev', 'next'],
    });
  $('.owl-next').on('click', function () {
    action = 'next';
            });
  $('.owl-prev').on('click', function () {
    action = 'prev';
            });
  $('.carousel-pillars-nav').on('click', 'li', function (e) {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
            });
          });
        }
      };
  $(document).ready(function () {
    Owl.init();
      });
    } else {
      var maxHeight = 0;
  $('.text-pillars').each(function () {
        var currentHeight = $(this).height();
        if (currentHeight > maxHeight) {
    maxHeight = currentHeight;
        }
      });
  $('.text-pillars').height(maxHeight);
    }

  window.addEventListener("load", function (event) {
    jQuery(".cfx_form_main,.wpcf7-form,.wpforms-form,.gform_wrapper form").each(function () {
      var form = jQuery(this);
      var screen_width = ""; var screen_height = "";
      if (screen_width == "") {
        if (screen) {
          screen_width = screen.width;
        } else {
          screen_width = jQuery(window).width();
        }
      }
      if (screen_height == "") {
        if (screen) {
          screen_height = screen.height;
        } else {
          screen_height = jQuery(window).height();
        }
      }
      form.append('<input type="hidden" name="vx_width" value="' + screen_width + '">');
      form.append('<input type="hidden" name="vx_height" value="' + screen_height + '">');
      form.append('<input type="hidden" name="vx_url" value="' + window.location.href + '">');
    });

    });
  document.addEventListener("DOMContentLoaded", function () {
      var words = document.querySelectorAll('.cd-words-wrapper span');
  var index = 0;
  function changeWord() {
    words[index].classList.remove('is-visible');
  words[index].classList.add('is-hidden');
  index = (index + 1) % words.length;
  words[index].classList.remove('is-hidden');
  words[index].classList.add('is-visible');
      }
  setInterval(changeWord, 1500);
    });
  document.addEventListener('DOMContentLoaded', function () {
      const fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', function () {
    fileSelected(fileInput);
      });
    });
  function fileSelected(input) {
      const fileInfo = document.getElementById("file-info-modal");
  const fileDelete = document.getElementById("file-delete-popup");
      if (input.files.length > 0) {
        const fileName = input.files[0].name;
  fileInfo.innerHTML = `${fileName}`;
  fileDelete.classList.add("show");
      } else {
    fileInfo.innerHTML = 'File is not chosen';
  fileDelete.classList.remove("show");
      }
    }
  function deleteFilePopup() {
      // Отримати посилання на елемент вводу файлу
      var fileInput = document.getElementById('fileInput');
  fileInput.value = '';
  fileSelected(fileInput);
    }
  document.addEventListener('DOMContentLoaded', function () {
      const fileInput = document.getElementById('fileInputFooter');
  if (fileInput) {
    fileInput.addEventListener('change', function () {
      fileSelectedFooter(fileInput);
    });
      }
    });
  function fileSelectedFooter(input) {
      const fileInfo = document.getElementById("file-info-footer");
  const fileDelete = document.getElementById("file-delete-footer");
      if (input.files.length > 0) {
        const fileName = input.files[0].name;
  fileInfo.innerHTML = `${fileName}`;
  fileDelete.classList.add("show");
      } else {
    fileInfo.innerHTML = 'File is not chosen';
  fileDelete.classList.remove("show");
      }
    }
  function deleteFile() {
      // Отримати посилання на елемент вводу файлу
      var fileInput = document.getElementById('fileInputFooter');
  fileInput.value = '';
  fileSelectedFooter(fileInput);
    }

  document.addEventListener('DOMContentLoaded', function () {
      const fileInput = document.getElementById('fileInputCareers');
  if (fileInput) {
    fileInput.addEventListener('change', function () {
      fileSelectedCareers(fileInput);
    });
      }
    });
  function fileSelectedCareers(input) {
      const fileInfo = document.getElementById("file-info-careers");
  const fileDelete = document.getElementById("file-delete-career");
      if (input.files.length > 0) {
        const fileName = input.files[0].name;
  fileInfo.innerHTML = `${fileName}`;
  fileDelete.classList.add("show");
  fileInfo.classList.add("sh");
      } else {
    fileInfo.innerHTML = 'File is not chosen';
  fileDelete.classList.remove("show");
  fileInfo.classList.remove("sh");
      }
    }
  function deleteFileCareer() {
      // Отримати посилання на елемент вводу файлу
      var fileInput = document.getElementById('fileInputCareers');
  fileInput.value = '';
  fileSelectedCareers(fileInput);
    }

  document.addEventListener('DOMContentLoaded', function () {
      const counters = document.querySelectorAll('.counter-n');
  const durationInSeconds = 3 * 1000; // Продолжительность в миллисекундах

  const options = {
    threshold: 0.5 // Порог видимости для Intersection Observer
      };

      const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
      }, options);

      counters.forEach(counterElement => {
    observer.observe(counterElement);
      });

  function startCounter(element) {
        const targetNum = parseInt(element.getAttribute('data-num'), 10);
  let currentNum = 0;
  const startTime = performance.now();

  function updateCounter(timestamp) {
          const progress = (timestamp - startTime) / durationInSeconds;

  if (progress < 1) {
    currentNum = Math.floor(progress * targetNum);
  element.innerText = currentNum;
  requestAnimationFrame(updateCounter);
          } else {
    element.innerText = targetNum;
          }
        }

  requestAnimationFrame(updateCounter);
      }
    });

  function handleResize() {
    setTimeout(() => { AOS.refresh(); }, 500);
    }
  window.addEventListener("resize", handleResize);

  AOS.init();

  $('.scroll-to').on('click', function (e) {
    e.preventDefault();

  $('html, body').animate({
    /*scrollTop: $($(this).attr('href')).offset().top - 60*/
  }, 500, 'linear');
    });

  $('.link-modal').click(function (e) {
    e.preventDefault();
  var modalID = $(this).attr('href');
  $(modalID).addClass('show');
  $('body').addClass('overflow-hidden');
    })
  $('.modal .close').click(function () {
    $('.modal').removeClass('show');
  $('body').removeClass('overflow-hidden');
    })

  //small
  const animationContainerSuccess = document.getElementById('animation-success');
  const animationDataSuccess = {
    container: animationContainerSuccess,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '/wp-content/themes/profisea-theme/animation/success.json',
    };
  /*const animSuccess = lottie.loadAnimation(animationDataSuccess);*/

  //modal
  const animationContainerSuccess2 = document.getElementById('animation-success-big');
  const animationDataSuccess2 = {
    container: animationContainerSuccess2,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '/wp-content/themes/profisea-theme/animation/success.json',
    };
  /* const animSuccess2 = lottie.loadAnimation(animationDataSuccess2);*/


  document.addEventListener('wpcf7mailsent', function (event) {
      if ('231' == event.detail.contactFormId) {
    $('.modal-small').addClass('show');
  animSuccess.play();
  setTimeout(function () {
    $('.modal-small').removeClass('show');
        }, 3000);
  $('#file-info-footer').text('File is not chosen');
  $('.deletefile').removeClass('show');
      }
  if ('233' == event.detail.contactFormId) {
    $('.modal-small').addClass('show');
  animSuccess.play();
  setTimeout(function () {
    $('.modal-small').removeClass('show');
        }, 3000);
  $('#file-info-careers').text('File is not chosen');
  $('.deletefile').removeClass('show');
      }
  if ('232' == event.detail.contactFormId) {
    $('.modal-small').addClass('show');
  animSuccess.play();
  setTimeout(function () {
    $('.modal-small').removeClass('show');
        }, 3000);
  $('#file-info-footer').text('File is not chosen');
  $('.deletefile').removeClass('show');
      }
  if ('230' == event.detail.contactFormId) {
    $('.modal .success-message').addClass('show');
  animSuccess2.play();
  setTimeout(function () {
    $('.modal .success-message').removeClass('show');
  $('.modal').removeClass('show');
  $('body').removeClass('overflow-hidden');
        }, 5000);
  $('#file-delete-popup').text('File is not chosen');
  $('.deletefile').removeClass('show');
      }
  if ('10036' == event.detail.contactFormId) {
    $('.modal-small').addClass('show');
  animSuccess.play();
  setTimeout(function () {
    $('.modal-small').removeClass('show');
        }, 3000);
      }
  if ('10107' == event.detail.contactFormId) {
    $('.modal-small').addClass('show');
  animSuccess.play();
  setTimeout(function () {
    $('.modal-small').removeClass('show');
        }, 3000);
      }
  if ('10195' == event.detail.contactFormId) {
    $('.modal-small').addClass('show');
  animSuccess.play();
  setTimeout(function () {
    $('.modal-small').removeClass('show');
        }, 3000);
      }

    }, false);

  $(document).mouseup(function (e) { // событие клика по веб-документу
      var div = $("#modalForm .content"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
  && div.has(e.target).length === 0) { // и не по его дочерним элементам
    $('.modal').removeClass('show'); // скрываем его
  $('body').removeClass('overflow-hidden');
      }
    });

  _linkedin_partner_id = "5140609";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);

  (function (l) {
      if (!l) {
    window.lintrk = function (a, b) { window.lintrk.q.push([a, b]) };
  window.lintrk.q = []
      }
  var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript"; b.async = true;
  b.src = ""; /*https://snap.licdn.com/li.lms-analytics/insight.min.js";*/
  s.parentNode.insertBefore(b, s);
    })(window.lintrk);
