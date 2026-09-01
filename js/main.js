/* ══════════════════════════════════════════════════════════════════
   MEZCAL MAYALEN · Herbario — interacción
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ───────────────────────────  INGLÉS  ───────────────────────────
     El HTML se escribe en español. Aquí vive únicamente la versión
     en inglés, con el mismo registro de cuaderno de naturalista. */
  var EN = {
    umbralEyebrow: 'Mezcal Mayalen',
    umbralTitle:   'Are you of legal age?',
    umbralSub:     'To enter, you must be old enough to drink alcohol<br>in your country.',
    umbralYes:     'Yes, I\'m of legal age',
    umbralNo:      'No',
    umbralLegal:   'Please drink responsibly. Sold only to adults of legal age.',
    umbralDeny:    'Come back when you\'re of legal age. We\'ll be here.',

    navCuaderno:       'Story',
    navHerbario:       'Collection',
    navProcedencia:    'Regions',
    navCorrespondencia:'Contact',
    navGaleria:        'Gallery',
    navReceta:         'Cocktails',
    plateFicha:        'Download tech sheet',
    navFichas:         'Tech sheets',
    fichasEyebrow:     'Documentation',
    fichasT:           'Technical sheets',
    fichasSub:         'Download each agave’s technical sheet as a print-ready PDF.',
    fichasDl:          'Download PDF',
    fichasCupreataV:   'Wild Cupreata Agave',
    fichasTobalaV:     'Wild Tobalá Agave',
    fichasBarrilV:     'Wild Barril Agave',
    fichasCoyoteV:     'Agave Americana (Coyote)',
    fichasCuisheV:     'Wild Cuishe Agave',
    fichasGuerreroV:   'Wild Cupreata · high proof',
    recEyebrow:        'To serve',
    recTitle:          'Cocktails',
    recSub:            'A glass for each agave.',
    cupreataIng:'45 ml Wild Cupreata · grapefruit · lime · soda · worm salt',
    cupreataMet:'Build over ice, top with soda, worm-salt rim.',
    tobalaIng:'45 ml Wild Tobalá · tonic · tangerine · rosemary',
    tobalaMet:'Over ice, tangerine twist, rosemary sprig.',
    barrilIng:'30 ml Wild Barril · 30 ml sweet vermouth · 30 ml Campari · orange',
    barrilMet:'Stir with ice, strain, finish with orange peel.',
    coyoteIng:'50 ml Wild Coyote · agave nectar · mole bitters · orange',
    coyoteMet:'Stir over ice and express the orange oils.',
    cuisheIng:'45 ml Wild Cuishe · grapefruit soda · lime',
    cuisheMet:'Build over ice, lengthen with grapefruit and a touch of lime.',
    guerreroIng:'60 ml Guerrero · neat, room temperature · orange with worm salt',
    guerreroMet:'Serve neat in a copita; pair with walnuts.',
    galEyebrow:        'From palenque to field',
    galTitle:          'Gallery',

    portadaEyebrow: '100% wild organic agaves',
    portadaSub:     'Sierra de Guerrero &middot; Valleys of Oaxaca',

    cuadernoEyebrow: 'Since 1949',
    cuadernoTitle:   'Our story',
    cuadernoP1: 'Our brand began with the intention of creating a drink for friends and family by focusing on the selection of mature wild agave plants.',
    cuadernoP2: 'We acquired a rustic distillery, known as a palenque, that had been active since 1949 in the mountains of Guerrero, where to this day we enjoy the artisanal culture of our Maestros Mezcaleros whose knowledge of mezcal making has been passed down as part of their family heritage.',
    cuadernoP3: 'The operation of the process is meticulously supervised by our Maestros Mezcaleros. We respect the uniqueness of each batch and its original essence. Our product is 100% artisanal and organic.',
    cuadernoOwned: 'A 100% Mexican company. Family established and family owned.',

    dato1:   'Palenque founded',
    dato2:   'Agaves',
    dato2v:  'Six wild Agaves',
    dato3:   'Cultivation',
    dato3v:  'Wild and organic',
    dato4:   'Distillation',
    dato4v:  'Copper still',

    capAlambique: 'Copper still. Palenque Mayalen, sierra de Guerrero.',
    capTinas:     'Wooden fermentation vats.',
    capLadera:    'Wild agaves on a stone hillside.',
    capDetalle:   'Wild agave detail among stone.',

    herbarioEyebrow: 'Six wild agaves',
    herbarioTitle:   'The collection',
    herbarioSub:     'Six mezcals, each from a different wild agave. Every label carries its own color, soil and character.',

    lam1: 'Pl. I', lam2: 'Pl. II', lam3: 'Pl. III',
    lam4: 'Pl. IV', lam5: 'Pl. V', lam6: 'Pl. VI',

    sProc:  'Origin',
    sAlt:   'Altitude',
    sSuelo: 'Soil',
    sMad:   'Maturation',
    sAlc:   'Alcohol',
    sNota:  'Tasting note',

    cupreataLocal: 'Cupreata',
    cupreataP:     'The Mezcal Wild Cupreata stands as our signature and most intricate variant. This type of agave is indigenous to the basin of the Balsas River, nestled in the towering mountains of Guerrero state in the southern regions of Mexico. This variety naturally proliferates on the mineral-rich slopes, optimal for mineral absorption, bestowing upon it a distinctive taste. This agave reaches maturity between 8 to 16 years, allowing for an excellent concentration of natural sugars and minerals in its core.',
    cupreataProc:  'Balsas river basin, Guerrero',
    cupreataSuelo: 'Rocky slope, rich in minerals',
    cupreataMad:   '8 to 16 years',
    cupreataN:     'Features a citrus and mineral scent and exhibits a sleek texture when swirled in a glass, offering a mildly sweet taste, followed by a delicate hint of dark chocolate in the aftertaste.',

    tobalaLocal: 'Wild-gathered',
    tobalaP:     'Made from a highly prized wild agave variety. The Mayalen Tobala label is part of our family of high quality mezcal products. Mayalen Tobala has been designed as a high-end distillate to be sipped slowly and appreciated by connoisseurs. In collaboration with local communities and our Master Mezcalero, Mayalen is part of the programs that guarantee the sustainability of wild agave species.',
    tobalaProc:  'Valleys of Oaxaca',
    tobalaSuelo: 'High woodland, among oaks',
    tobalaMad:   '10 to 15 years',
    tobalaN:     'Fresh herbal flavors on the palate accompanied by roasted tangerine peel with a sweet dark chocolate finish.',

    barrilLocal: 'Karwinskii family',
    barrilP:     'Mezcal Barril hails from Oaxaca, a superb spirit born from the unique Barril agave of the Karwinskii family, known for its elongated leaves and fondness for mild summers. It\'s crafted from agaves nurtured in the rocky soils of our Master Mezcalero\'s lands, located near Matatlan at 5900 feet. The meticulous production and distinctive terroir endow it with a profound complexity and richness, epitomizing the diverse essence of Oaxaca\'s mezcal heritage.',
    barrilProc:  'Matatlán, Oaxaca',
    barrilSuelo: 'Stony ground, mild summers',
    barrilMad:   '12 to 14 years',
    barrilN:     'This mezcal offers a fragrant blend of ripe fruit and gentle smokiness on the nose, with whispers of fresh rosemary herb. Swirling reveals a smooth, rich body, leading to a palate layered with sweet agave and hints of earthiness.',

    coyoteLocal: 'Micro-endemic species',
    coyoteP:     'Agave Americana, commonly known as Coyote, is a wild agave species that grows in a narrow area of the State of Oaxaca. It is considered a micro endemic species so mezcal production of this variety is limited and highly valued. With the collaboration of the local community and the Master Mezcalero, the Mayalen Coyote label is part of our portfolio of high-quality spirits.',
    coyoteProc:  'Sierra of Oaxaca',
    coyoteSuelo: 'Micro-endemic band',
    coyoteMad:   '14 to 18 years',
    coyoteN:     'Smooth flavor of comal-roasted citrus that gradually gives way to earthy wood and melds delicately with an elegant finish.',

    cuisheLocal: 'Karwinskii family',
    cuisheP:     'Originally from the highlands of Oaxaca, the Cuishe agave belongs to the Karwinskii family, with elongated leaves and a preference for mild summers. This particular agave comes from the lands of Jose Hernandez\'s father, our Master Mezcalero, located near the province of Matatlan, at an altitude of 2,000 meters (6,700 feet), where it grows in stony soils.',
    cuisheProc:  'Matatlán, Oaxaca',
    cuisheSuelo: 'High stony ground',
    cuisheMad:   '12 to 16 years',
    cuisheN:     'Transparent color, with complex rosemary herbal appreciation, light citric grapefruit aroma and long finish with a smoky maguey stalk sensation.',

    guerreroLocal: 'Cupreata · high proof',
    guerreroP:     'Our Guerrero variety was inspired by those who are warriors at heart. It is elegant with a balanced and distinguished consistency. With high percentage of alcohol, its appreciation of strong and complex body, it releases its aroma with ease when swirled in the glass, making it a drink of pure excellence. It is popular and in high demand especially among the great mezcal connoisseurs.',
    guerreroProc:  'High sierra of Guerrero',
    guerreroSuelo: 'Rocky slope',
    guerreroMad:   '8 to 16 years',
    guerreroN:     'Initial alcoholic warmth with the presence of a dense, sweet body and subtle dark chocolate aftertaste makes it ideal for tasting with nuts. Herbal notes continue through to the finish.',

    procEyebrow:  'Guerrero & Oaxaca',
    procTitle:    'Regions',
    procSub:      'Where each mezcal comes from.',
    procLamsGro:  'Sierra & Balsas river',
    procLamsOax:  'Valleys & highlands',
    procGro:      'High sierra and the Balsas river basin. Stone slopes where papalote ripens for over a decade. The 1949 palenque is here.',
    procOax:      'Valleys and highlands around Matatlán, up to two thousand metres, on stony soils our maestro mezcalero\'s family has worked for generations.',
    procCasa:     'Home of the brand',
    procCdmxT:    'Mexico City',
    procCdmx:     'From here we handle distribution, restaurants and private tastings.',

    corrEyebrow: 'Write to us',
    corrTitle:   'Contact',
    corrP:       'For orders and distribution, drop us a message and we\u2019ll get back to you soon.',
    corrMail:    'Email',
    corrSocial:  'Instagram',
    cName: 'First name',
    cLast: 'Last name',
    cMail: 'Email',
    cMsg:  'Message',
    cSend: 'Send',

    colofonTag:   'Mezcal Joven &middot; Artisanal &amp; organic &middot; Made in Mexico',
    colofonLegal: 'Please drink responsibly. Sold only to adults of legal age.'
  };

  /* Avisos que genera el propio script */
  var AVISO = {
    es: {
      enviando: 'Enviando…',
      enviado:  'Gracias. Tu mensaje va en camino.',
      pendiente: 'El envío sigue pendiente. Escríbenos a hola@mezcalmayalen.com'
    },
    en: {
      enviando: 'Sending…',
      enviado:  'Thank you. Your message is on its way.',
      pendiente: 'The message is still pending. Write to us at hola@mezcalmayalen.com'
    }
  };

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var html = document.documentElement;
  var lang = 'es';

  /* ───────────────────────────  IDIOMA  ─────────────────────────── */
  function setLang(next) {
    lang = next === 'en' ? 'en' : 'es';
    html.setAttribute('lang', lang);
    html.setAttribute('data-lang', lang);

    $$('[data-i18n]').forEach(function (el) {
      // El español original se guarda la primera vez, para poder volver.
      if (!el.dataset.es) el.dataset.es = el.innerHTML;
      var value = lang === 'en' ? EN[el.getAttribute('data-i18n')] : el.dataset.es;
      if (value) el.innerHTML = value;
    });

    // Enlaces que cambian de idioma (p. ej. PDFs de fichas técnicas / tech sheets).
    $$('[data-href-es]').forEach(function (a) {
      var url = lang === 'en' ? a.getAttribute('data-href-en') : a.getAttribute('data-href-es');
      if (url) a.setAttribute('href', url);
    });

    $$('[data-set-lang]').forEach(function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-set-lang') === lang);
    });

    try { localStorage.setItem('mayalen-lang', lang); } catch (e) {}
  }

  $$('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-set-lang')); });
  });

  var guardado = null;
  try { guardado = localStorage.getItem('mayalen-lang'); } catch (e) {}
  setLang(guardado === 'en' ? 'en' : 'es');   // español por defecto


  /* ───────────────────────────  UMBRAL  ─────────────────────────── */
  var umbral = $('#umbral');
  var PASE = 'mayalen-edad';
  var yaPaso = false;
  try { yaPaso = sessionStorage.getItem(PASE) === '1'; } catch (e) {}

  function abrir() {
    umbral.classList.add('is-out');
    document.body.classList.remove('is-locked');
    try { sessionStorage.setItem(PASE, '1'); } catch (e) {}
    window.setTimeout(function () { umbral.setAttribute('hidden', ''); }, 1000);
  }

  if (yaPaso) {
    umbral.classList.add('is-out');
    umbral.setAttribute('hidden', '');
    document.body.classList.remove('is-locked');
  }

  $('#umbralYes').addEventListener('click', abrir);
  $('#umbralNo').addEventListener('click', function () {
    $('#umbralDeny').hidden = false;
    $('.umbral__acts').style.display = 'none';
  });


  /* ────────────────────────────  MENÚ  ──────────────────────────── */
  var menu = $('#menu');
  var burger = $('#burger');

  burger.addEventListener('click', function () {
    var abierto = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(abierto));
    document.body.classList.toggle('is-locked', abierto);
  });

  $$('.menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('is-locked');
    });
  });


  /* ──────────────────────────  REVELADO  ────────────────────────── */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }


  /* ────────────────────────  CORRESPONDENCIA  ───────────────────── */
  var carta = $('#carta');
  var aviso = $('#cartaAviso');

  carta.addEventListener('submit', function (e) {
    e.preventDefault();

    // Mientras el destino traiga el marcador de ejemplo, se avisa por correo.
    if (carta.action.indexOf('YOUR_FORM_ID') > -1) {
      aviso.textContent = AVISO[lang].pendiente;
      return;
    }

    aviso.textContent = AVISO[lang].enviando;
    fetch(carta.action, {
      method: 'POST',
      body: new FormData(carta),
      headers: { Accept: 'application/json' }
    }).then(function (r) {
      if (r.ok) {
        carta.reset();
        aviso.textContent = AVISO[lang].enviado;
      } else {
        aviso.textContent = AVISO[lang].pendiente;
      }
    }).catch(function () {
      aviso.textContent = AVISO[lang].pendiente;
    });
  });


  /* ─────────────────────  CABECERA AL DESPLAZAR  ─────────────────── */
  var head = $('#head');
  var onScroll = function () {
    head.classList.toggle('is-stuck', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();


  /* ────────────────────────────  AÑO  ───────────────────────────── */
  $('#anio').textContent = String(new Date().getFullYear());


  /* ──────────────────  AUTOPLAY DE VIDEOS  ──────────────────────── */
  // Algunos navegadores no inician el autoplay hasta la primera interacción.
  function reproducirVideos() {
    $$('video[autoplay]').forEach(function (v) {
      v.muted = true;
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    });
  }
  reproducirVideos();
  ['click', 'touchstart', 'scroll'].forEach(function (ev) {
    window.addEventListener(ev, reproducirVideos, { once: true, passive: true });
  });

})();
