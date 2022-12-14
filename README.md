[![Netlify Status](https://api.netlify.com/api/v1/badges/d07cf9d9-8012-4144-ba84-a8af40458941/deploy-status)](https://app.netlify.com/sites/transcendent-naiad-733465/deploys)

# π iPad

μμ΄ν¨λ μ ν νμ΄μ§λ₯Ό λ§λλ μμ μλλ€.

[DEMO](https://transcendent-naiad-733465.netlify.app/)

![Screenshots](./images/screenshot1.jpg)

### Assets

κ°μ μμ μμ μ¬μ©νλ μ΄λ―Έμ§μ μμ λ± μμμ λ€μ΄λ‘λν©λλ€.

[μμ λ€μ΄λ‘λ](./assets.zip)

### Reset.css

κ° λΈλΌμ°μ μ κΈ°λ³Έ μ€νμΌμ μ΄κΈ°νν©λλ€.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

### Google Fonts

Apple SF Pro ν°νΈλ κ³΅μ  λ° λ°°ν¬ν  μ μκΈ° λλ¬Έμ,  
κ°μ₯ μ μ¬ν μΉ ν°νΈλ‘ λμ²΄ν©λλ€.

μλ¬Έ: [Roboto](https://fonts.google.com/specimen/Roboto)
νκΈ: [Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

### μ€ν κ·Έλν λ° νΈμν° μΉ΄λ μ λ³΄

μΉνμ΄μ§κ° μμ λ―Έλμ΄λ‘ κ³΅μ λ  λ μ°μ μ μΌλ‘ νμ©λλ μ λ³΄λ₯Ό μ§μ ν©λλ€.

```html
<!--Open Graph-->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Apple (KR)" />
<meta property="og:title" content="iPad 10.2" />
<meta property="og:description" content="κ°λ ₯ν A13 Bionic μΉ©μ νμ¬ν iPad. μΌν° μ€νμ΄μ§ κΈ°μ μ΄ μ μ©λ 12MP μΈνΈλΌ μμ΄λ μ λ©΄ μΉ΄λ©λΌ, True Tone λμ€νλ μ΄ κΈ°μ  λ° 64GB μ μ₯ μ©λκΉμ§ κ°μ·μ΅λλ€." />
<meta property="og:image" content="./images/ipad-seo.png" />
<meta property="og:url" content="https://www.apple.com/kr/ipad-10.2/" />

<!--Twitter Card-->
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Apple (KR)" />
<meta property="twitter:title" content="iPad 10.2" />
<meta property="twitter:description" content="κ°λ ₯ν A13 Bionic μΉ©μ νμ¬ν iPad. μΌν° μ€νμ΄μ§ κΈ°μ μ΄ μ μ©λ 12MP μΈνΈλΌ μμ΄λ μ λ©΄ μΉ΄λ©λΌ, True Tone λμ€νλ μ΄ κΈ°μ  λ° 64GB μ μ₯ μ©λκΉμ§ κ°μ·μ΅λλ€." />
<meta property="twitter:image" content="./images/ipad-seo.png" />
<meta property="twitter:url" content="https://www.apple.com/kr/ipad-10.2/" />
```

### Hero Contents κ°κ²© μμ

μν λ¨μ μλ ₯μ΄ μ΄λ €μ΄ κ²½μ° λ³΅μ¬νμΈμ!

```html
<p class="pricing">
  β©449,000λΆν°
</p>
```

### CSS λ³μ

`--`λ‘ μμνλ λ³μλ₯Ό μ μΈν΄ κ°μ ν λΉν  μ μμ΅λλ€.  
λ³μκ° μ μΈλ μ νμ μμλ₯Ό ν¬ν¨ν΄ νμ μμμμ `var()` ν¨μλ₯Ό ν΅ν΄ μ¬μ©ν  μ μμ΅λλ€.

```css
html {
  --color-white: #FFF;
  --color-black: #000;
  --color-font: #1D1D1D;
  --color-font-darkgray: #6E6E6E;
  --color-font-middlegray: #b7b7b7;
  --color-font-lightgray: #F5F5F5;
  --color-link: #0071E3;
  --color-link-focus: #81B9F1;
  --color-border: #D2D2D2;
  --color-header: #3A3A3A;
  --color-section: #F5F5F5;
  --color-shadow: rgba(0, 0, 0, .4);
}
.example {
  background-color: var(--color-font);
}
```

### Icons

```css
.info .icon.icon--chip         { background-image: url("../images/sprite_chip.png"); }
.info .icon.icon--faster       { background-image: url("../images/sprite_faster.png"); }
.info .icon.icon--neural       { background-image: url("../images/sprite_neural.png"); }
.info .icon.icon--apps         { background-image: url("../images/sprite_apps.png"); }
.info .icon.icon--battery      { background-image: url("../images/sprite_battery.png"); }
.info .icon.icon--display      { background-image: url("../images/sprite_display.png"); }
.info .icon.icon--true-tone    { background-image: url("../images/sprite_true_tone.png"); }
.info .icon.icon--center-stage { background-image: url("../images/sprite_center_stage.png"); }
.info .icon.icon--front-camera { background-image: url("../images/sprite_front_camera.png"); }
.info .icon.icon--back-camera  { background-image: url("../images/sprite_back_camera.png"); }
.info .icon.icon--scan         { background-image: url("../images/sprite_scan.png"); }
.info .icon.icon--download     { background-image: url("../images/sprite_download.png"); }
.info .icon.icon--wifi         { background-image: url("../images/sprite_wifi.png"); }
.info .icon.icon--lte          { background-image: url("../images/sprite_lte.png"); }
.info .icon.icon--pencil       { background-image: url("../images/sprite_pencil.png"); }
.info .icon.icon--keyboard     { background-image: url("../images/sprite_keyboard.png"); }
.info .icon.icon--notes        { background-image: url("../images/sprite_notes.png"); }
.info .icon.icon--covers       { background-image: url("../images/sprite_covers.png"); }
```

### Sprite Icon Animation

μ¬λ¬ μ΄λ―Έμ§λ₯Ό ν μ΄λ―Έμ§λ‘ ν©μ³ κ΄λ¦¬νλ λ°©μμ **μ΄λ―Έμ§ μ€νλΌμ΄νΈ κΈ°λ²** μ΄λΌκ³  ν©λλ€.

<img src="./images/sprite_apps.png" alt="μ΄λ―Έμ§ μ€νλΌμ΄νΈ" width="300" />

```css
@keyframes sprite-icon {
  /* 1~10 */
  0.00% { background-position: 0 0; }
  1.67% { background-position: -100px 0; }
  3.33% { background-position: -200px 0; }
  5.00% { background-position: -300px 0; }
  6.67% { background-position: -400px 0; }
  8.33% { background-position: -500px 0; }
  10.00% { background-position: 0 -100px; }
  11.67% { background-position: -100px -100px; }
  13.33% { background-position: -200px -100px; }
  15.00% { background-position: -300px -100px; }

  /* 11~20 */
  16.67% { background-position: -400px -100px; }
  18.33% { background-position: -500px -100px; }
  20.00% { background-position: 0 -200px; }
  21.67% { background-position: -100px -200px; }
  23.33% { background-position: -200px -200px; }
  25.00% { background-position: -300px -200px; }
  26.67% { background-position: -400px -200px; }
  28.33% { background-position: -500px -200px; }
  30.00% { background-position: 0 -300px; }
  31.67% { background-position: -100px -300px; }

  /* 21~30 */
  33.33% { background-position: -200px -300px; }
  35.00% { background-position: -300px -300px; }
  36.67% { background-position: -400px -300px; }
  38.33% { background-position: -500px -300px; }
  40.00% { background-position: 0 -400px; }
  41.67% { background-position: -100px -400px; }
  43.33% { background-position: -200px -400px; }
  45.00% { background-position: -300px -400px; }
  46.67% { background-position: -400px -400px; }
  48.33% { background-position: -500px -400px; }

  /* 31~40 */
  50.00% { background-position: 0 -500px; }
  51.67% { background-position: -100px -500px; }
  53.33% { background-position: -200px -500px; }
  55.00% { background-position: -300px -500px; }
  56.67% { background-position: -400px -500px; }
  58.33% { background-position: -500px -500px; }
  60.00% { background-position: 0 -600px; }
  61.67% { background-position: -100px -600px; }
  63.33% { background-position: -200px -600px; }
  65.00% { background-position: -300px -600px; }

  /* 41~50 */
  66.67% { background-position: -400px -600px; }
  68.33% { background-position: -500px -600px; }
  70.00% { background-position: 0 -700px; }
  71.67% { background-position: -100px -700px; }
  73.33% { background-position: -200px -700px; }
  75.00% { background-position: -300px -700px; }
  76.67% { background-position: -400px -700px; }
  78.33% { background-position: -500px -700px; }
  80.00% { background-position: 0 -800px; }
  81.67% { background-position: -100px -800px; }

  /* 51~60 */
  83.33% { background-position: -200px -800px; }
  85.00% { background-position: -300px -800px; }
  86.67% { background-position: -400px -800px; }
  88.33% { background-position: -500px -800px; }
  90.00% { background-position: 0 -900px; }
  91.67% { background-position: -100px -900px; }
  93.33% { background-position: -200px -900px; }
  95.00% { background-position: -300px -900px; }
  96.67% { background-position: -400px -900px; }
  98.33% { background-position: -500px -900px; }
}
```

JSλ‘ κ° νλ μ μμΉ λ° μμ±κ° μ½κ² λ§λ€κΈ°

```js
let x = 0
let y = 0
let frames = ''
for (let i = 0; i < 60; i += 1) {
  // frames += `${(100 / 60 * i).toFixed(2)}% { background-position: ${x}px ${y}px; }<br />` // HTMLμΌλ‘ μΆλ ₯!
  frames += `${(100 / 60 * i).toFixed(2)}% { background-position: ${x}${x === 0 ? '' : 'px'} ${y}${y === 0 ? '' : 'px'}; }\n`
  if (x <= -500) {
    x = 0
    y -= 100
    continue // νμ¬ λ°λ³΅μ μ’λ£νκ³  λ€μ λ°λ³΅μΌλ‘ λμ΄κ°κΈ°!
  }
  x -= 100
}
// document.body.innerHTML = frames // HTMLμΌλ‘ μΆλ ₯!
console.log(frames)
```

### IntersectionObserver

[IntersectionObserver(μμμ κ°μμ± κ΄μ°°)](https://heropy.blog/2019/10/27/intersection-observer/)  
λΈλΌμ°μ  λ·°ν¬νΈ(Viewport)μ μ€μ ν μμ(Element)μ κ΅μ°¨μ μ κ΄μ°°νμ¬, μμκ° λ³΄μ΄λμ§ λ³΄μ΄μ§ μλμ§ κ΅¬λ³νλ κΈ°λ₯.

```js
// μμμ κ°μμ± κ΄μ°° λ‘μ§!
const io = new IntersectionObserver(entries => {
  // entriesλ `io.observe(el)`λ‘ λ±λ‘λ λͺ¨λ  κ΄μ°° λμ λ°°μ΄.
  entries.forEach(entry => {
     // μ¬λΌμ§ λ.
    if (!entry.isIntersecting) {
      return
    }
    entry.target.classList.add('show')
  })
})
// κ΄μ°°ν  μμλ€ κ²μ
const infoEls = document.querySelectorAll('.info')
// κ΄μ°° μμ!
infoEls.forEach(el => io.observe(el))
```

### iPad μ’λ₯

```js
export default [
  {
    thumbnail: './images/compare_ipad_pro.png',
    colors: ['#68696D', '#E2E3E5'],
    name: 'iPad Pro',
    tagline: 'κΆκ·Ήμ iPadλ<br />μ΄λ° κ².',
    price: 999000,
    url: '/ipad-pro/'
  },
  {
    thumbnail: './images/compare_ipad_air.png',
    colors: ['#68696D', '#E2E3E5', '#E8D2CE', '#B9B8D1', '#88AEBF'],
    name: 'iPad Air',
    tagline: 'κ°λ ₯νλ€. λ€μ±λ‘­λ€.<br />κ²½μ΄λ‘­λ€.',
    price: 779000,
    url: '/ipad-air/'
  },
  {
    thumbnail: './images/compare_ipad_10_2.png',
    colors: ['#68696D', '#E2E3E5'],
    name: 'iPad',
    tagline: 'λ§μ‘±μ€λ¬μ΄ μ±λ₯.<br />κΈ°λΆ μ’μ κ°κ²©.',
    price: 449000,
    url: '/ipad-10.2/'
  },
  {
    thumbnail: './images/compare_ipad_mini.png',
    colors: ['#68696D', '#E2E3E5', '#E8D2CE', '#B9B8D1'],
    name: 'iPad Pro',
    tagline: 'λ©κ°κΈ μ±λ₯.<br />ν¬κΈ°λ§ λ―Έλ.',
    price: 649000,
    url: '/ipad-mini/'
  }
]
```

### νΈν° λ©λ΄

```js
export default [
  {
    title: 'μΌν λ° μμλ³΄κΈ°',
    maps: [
      { name: 'μ€ν μ΄', url: '/shop/goto/store' },
      { name: 'Mac', url: '/mac' },
      { name: 'iPad', url: '/ipad' },
      { name: 'iPhone', url: '/iphone' },
      { name: 'Watch', url: '/watch' },
      { name: 'AirPods', url: '/airpods' },
      { name: 'TV λ° ν', url: '/tv-home' },
      { name: 'AirTag', url: '/airtag' },
      { name: 'μ‘μΈμλ¦¬', url: '/shop/goto/buy_accessories' }
    ]
  },
  {
    title: 'μλΉμ€',
    maps: [
      { name: 'Apple Music', url: '/apple-music' },
      { name: 'Apple TV+', url: '/apple-tv-plus' },
      { name: 'Apple Arcade', url: '/apple-arcade' },
      { name: 'iCloud', url: '/icloud' },
      { name: 'Apple Books', url: '/apple-books' },
      { name: 'Apple Podcast', url: '/apple-podcasts' },
      { name: 'App Store', url: '/app-store' }
    ]
  },
  {
    title: 'κ³μ ',
    maps: [
      { name: 'Apple ID κ΄λ¦¬', url: 'https://appleid.apple.com' },
      { name: 'Apple Store κ³μ ', url: '/shop/goto/account' },
      { name: 'iCloud.com', url: 'https://www.icloud.com' }
    ]
  },
  {
    title: 'Apple Store',
    maps: [
      { name: 'λ§€μ₯ μ°ΎκΈ°', url: '/retail' },
      { name: 'Genius Bar', url: '/retail/geniusbar' },
      { name: 'Today at Apple', url: '/today' },
      { name: 'Apple μΊ ν', url: '/today/camp' },
      { name: 'Apple Store μ±', url: 'https://apps.apple.com/app/apple-store/id375380948' },
      { name: 'λ¦¬νΌ λ° νΉκ° μ ν', url: '/shop/goto/special_deals' },
      { name: 'κΈμ΅ νν', url: '/shop/goto/financing' },
      { name: 'Apple Trade In', url: '/trade-in' },
      { name: 'μ£Όλ¬Έ μν', url: '/shop/goto/order/list' },
      { name: 'μΌν λμλ§', url: '/shop/goto/help' }
    ]
  },
  {
    title: 'λΉμ¦λμ€',
    maps: [
      { name: 'Appleκ³Ό λΉμ¦λμ€', url: '/business' },
      { name: 'λΉμ¦λμ€λ₯Ό μν μ ν μΌννκΈ°', url: '/retail/business' }
    ]
  },
  {
    title: 'κ΅μ‘',
    maps: [
      { name: 'Appleκ³Ό κ΅μ‘', url: '/education' },
      { name: 'μ΄μ€κ³ μ© μ ν μΌννκΈ°', url: '/education/k12/how-to-buy' },
      { name: 'λν μνμ μν μ ν μΌννκΈ°', url: '/shop/goto/educationrouting' }
    ]
  },
  {
    title: 'Appleμ κ°μΉκ΄',
    maps: [
      { name: 'μμ¬μ΄ μ¬μ©', url: '/accessibility' },
      { name: 'νκ²½', url: '/environment' },
      { name: 'κ°μΈμ λ³΄ λ³΄νΈ', url: '/privacy' },
      { name: 'νλ ₯μμ²΄μ λν μ±μ', url: '/supplier-responsibility' }
    ]
  },
  {
    title: 'Apple μ λ³΄',
    maps: [
      { name: 'Newsroom', url: '/newsroom' },
      { name: 'Apple λ¦¬λμ­', url: '/leadership' },
      { name: 'μ±μ© μλ΄', url: '/careers' },
      { name: 'μ€λ¦¬ λ° κ·μ  μ€μ', url: '/compliance' },
      { name: 'μ΄λ²€νΈ', url: '/apple-events' },
      { name: 'μΌμλ¦¬ μ°½μΆ', url: '/job-creation' },
      { name: 'Apple μ°λ½μ²', url: '/contact' }
    ]
  }
]
```

### λ¬Έμ₯ μ λ¦¬

κ°μμμ μ§μ  μμ±νλ λ¬Έμ₯μ, μλμμ μμλλ‘ λ³΅μ¬/λΆμ¬λ£κΈ° ν  μ μμ΅λλ€.

```plaintext
#### Hero

iPadμ Smart Keyboard λ° Apple Pencil
μΌν° μ€νμ΄μ§ κΈ°μ μ΄ μ μ©λ μλ‘μ΄ μΈνΈλΌ μμ΄λ μ λ©΄ μΉ΄λ©λΌ
A13 BIONIC μΉ© μ κ²© νμ¬
μ μ₯ μ©λμ 64GBλΆν°
λ§€μ¬λ₯Ό λμ± μ½κ².
β©449,000λΆν°
κ°λ ₯ν μ±λ₯μ κ°νΈν¨κ³Ό λ€μ¬λ€λ₯κΉμ§ κ°μΆ μλ‘μμ§ iPad. λΉμ μ΄ μ΄λ€ μΌμ μ¦κ²¨νλ  ν¨κ»ν  μ μλλ‘ λμμΈλμμ΅λλ€. μμ, μ·¨λ―Έ, κ³΅λΆ, μν΅ λ±. μ΄ λͺ¨λ  κ²μ λΆλ΄ μμ΄ λλ¦΄ μ μμ£ .
μ΄λ²€νΈ μμ²­νκΈ°
iPadλ₯Ό μ ννλ μ΄μ 

#### Power

κ±°μΉ¨μλ μΌ μ²λ¦¬ μ±λ₯.
Keynote λ§ν¬μκ³Ό λ©μμ§κ° ν¨κ» νμλ Split View
λμμ μ¬λ¬ μ± μ¬μ© κ°λ₯
iPadμ Wonderbox μ±μ΄ μ΄λ € μλ λͺ¨μ΅
μ λκ² μ¦κΈ°λ μλ‘μ΄ APPLE ARCADE κ²μ
A13 Bionic μΉ©μ΄ λ©μμ§ μ μ‘, μΈν°λ· μν, μ¬λ¬ μ± λμμ μ¬μ©νκΈ° λ± λͺ¨λ  μμμ λμ± νμν λ°μμ±μ λν΄μ€λλ€.
μ΅λ 20% λΉ¨λΌμ§ GPUλ‘ λ°μ΄λ κ·Έλν½ μ±λ₯μ μ μ¬ν©λλ€. λͺ°μκ° λμΉλ κ²μ λ± λ λ§μ κ²μ μ¦κΈ°λ λ° μμ±λ§μΆ€μ΄μ£ .
λμ± κ°λ ₯ν΄μ§ Neural Engineμ΄ iPadOS 15μ λΌμ΄λΈ νμ€νΈμ κ°μ λ¨Έμ  λ¬λ κΈ°λ° κΈ°λ₯μ κ΅¬νν΄μ€λλ€.
A13 Bionic μΉ©μ Adobe Fresco, Procreateμ κ°μ μ²¨λ¨ μ±λ κ±°λ¬ν κ΅¬λν©λλ€.
μ¨μ’μΌ κ°λ λ°°ν°λ¦¬λ₯Ό κ°μΆ iPad. λΉμ μ΄ μ΄κ³΅ λͺ¨λμΌ λλ, κ²μ μΌλ§€κ²½μ λΉ μ Έ μμ λλ λ ν¨κ»ν  μ€λΉκ° λμ΄ μμ΅λλ€.
Procreateμμ Apple Pencilλ‘ κ·Έλ¦Όμ΄ κ·Έλ €μ Έ μλ λͺ¨μ΅
μ€μΌμΉνκ³ , κ·Έλ¦¬κ³ , μμΉ νκ³ 

#### Display

λΉλλ μμ΄λμ΄μ κ±Έλ§μ λμ€νλ μ΄.
iPadμ Goodnotes 5 μ±μμ νΈμ§ μ€μΈ μκΈμ¨ νκΈ°
λΈνΈ νκΈ°λ GOODNOTES 5λ‘
SharePlay κΈ°λ₯μΌλ‘ μμμ ν¨κ» μ¦κΈ°λ λͺ¨μ΅
ν¨κ» λ³΄κ³  ν¨κ» μ¦κΈ°κ³ 
λλλλ‘ μ¬μΈν λνμΌκ³Ό μμν μμμ μλνλ 25.9cm Retina λμ€νλ μ΄λ₯Ό κ°μΆ iPad. μνλ₯Ό κ°μν  λλ, νλ‘μ νΈλ₯Ό μ§νν  λλ λλ λ©μ§ κ·Έλ¦Όμ κ·Έλ¦΄ λλ λν  λμ μμ£ .
True Toneμ΄ μ£Όλ³μ μ‘°λͺμ λ§μΆ° μμ¨λλ₯Ό μ‘°μ ν΄μ€λλ€. λλΆμ μ΄λ€ μ‘°λͺμμλ λμ΄ νΈμν νλ©΄μ κ²½νν  μ μμ£ .

#### Camera

μ΄¬μμμ νΈμ§ κ³΅μ κΉμ§ ν κΈ°κΈ°μμ.
μΌν° μ€νμ΄μ§ κΈ°μ μ΄ μμ ν΅ν μ λΉμ μ΄ μΈμ λ νλ©΄ μ€μμ μλλ‘ μλμΌλ‘ μΉ΄λ©λΌλ₯Ό μ‘°μ ν΄ μ€λλ€. λλΆμ μλ‘μκ² λ μ§μ€ν  μ μκ² λμ£ . SNSμ μ¬λ¦΄ μ¬λ―Έλ λμμμ λ§λ€ λλ μκΈ΄νλ΅λλ€.
iPadμμ μμ ν΅ν μ€ μΌν° μ€νμ΄μ§ κΈ°λ₯μ΄ μ¬μ©λλ μμ
μΌν° μ€νμ΄μ§ λλΆμ μμ ν΅νλ λ μμ°μ€λ½κ²
12MP μΈνΈλΌ μμ΄λ μ λ©΄ μΉ΄λ©λΌλ μΌν° μ€νμ΄μ§ κΈ°μ λΏλ§ μλλΌ μμ²­λκ² ν₯μλ μ΄λ―Έμ§ νμ§μ μλν©λλ€. λλΆμ λμ± νλ₯­ν μμΉ΄μ λ¨μ²΄ μ¬μ§λ μ°μ μ μμ£ .
iPad νλ©΄μ νμ¬λ 8MP μμ΄λ μΉ΄λ©λΌλ μ λͺνκ³  λλ ·ν μ¬μ§κ³Ό λμμμ λ΄μ μ μμ΅λλ€.
λ€μ¬λ€λ₯ν νλ©΄ μΉ΄λ©λΌλ‘ λ¬Έμλ₯Ό μ€μΊνκ³  λͺ°μκ° λμΉλ AR μ±μ μ¦κΈΈ μλ μμ΅λλ€.
μ¬μ§ μ±μμ νΈμ§λκ³  μλ μ΄λ―Έμ§
μ¬μ§λ λμμλ μ°κ³  νΈμ§νκ³ 

#### Wireless

μ μ΄ μλ€λ κ±΄ νκ³κ° μλ€λ κ².
19λͺμ΄ μ°Έμ¬ μ€μΈ FaceTime μμ ν΅ν
FACETIMEμΌλ‘ μν΅νκ³ 
μ΄λμμλ  νμΌμ λ€μ΄λ‘λνκ³ , μνλ₯Ό μ€νΈλ¦¬λ°νκ³ , λλ£μ νμνκ±°λ μ½νμΈ λ₯Ό μλ‘λν  μ μμ΅λλ€.
κ³ μ Wi-Fi λλΆμ μ§, μ§μ₯, νκ΅ λ± iPadμ ν¨κ»νλ μ΄λμμλ  μΈν°λ·μ μ°κ²°ν  μ μμ΅λλ€.
GigabitκΈ LTE λλΆμ Wi-Fiμ μ°κ²°ν  μ μλ κ²½μ°μλ μ¨λΌμΈ μ μμ΄ κ°λ₯ν©λλ€.
μλ£°λ¬μ λν΄ λ μμλ³΄κΈ°
νμΌ, iCloud Drive μ ν νλ©΄
λͺ¨λ  νμΌ νμΈμ μ΄λ μ€μλ

#### Accessories

μμΌλ‘ μ°κ±°λ ν€λ³΄λλ‘ μΉκ±°λ.
Smart Keyboardμ Apple Pencilμ΄ κ°μΆ°μ§ iPadμμ Split Viewλ‘ Mail μ±μ μ΄λ©μΌκ³Ό λ©λͺ¨ μ±μ μκΈμ¨ νκΈ°
μ΄λ©μΌλ νμ΄ν νκ³  μκΈμ¨ λ©λͺ¨λ μ κ³ 
SMART KEYBOARD λ° APPLE PENCIL μ§μ
Apple Pencilμ μ€μ  νμΌλ‘ μ’μ΄μ μ°λ― μμ°μ€λ¬μ΄ λλμ μ μ¬ν©λλ€. λμμ λΉμ μ μκΈμ¨λ₯Ό ν€λ³΄λλ‘ μλ ₯ν νμ€νΈλ§νΌμ΄λ κ°λ ₯νκ² λ§λ€μ΄μ£Όλ νμν μ­λμ μλνμ£ .4
μκ³  κ°λ²Όμ΄ Smart Keyboardλ₯Ό λΆμ°©ν΄ νΈμνκ² νμ΄ννμΈμ. λ¦¬ν¬νΈ μμ±, μλ¬΄ κΈ°ν λ±μ λ±μ΄μ£ .
Apple Pencilμ νμ©ν΄ κΈ°μ΅μ λ¨λ λ©λͺ¨λ₯Ό λμ μ΄κ³ , λ©μ§ μμ  μνμ λ§λ€κ³ , μ€ν¬λ¦°μ·μ λ§νΉνλ λ± μ€λ‘ λ€μν μΌμ ν  μ μλ΅λλ€.
Apple Pencilμ λν΄ λ μμλ³΄κΈ°
Smart Keyboardλ μ μΌλ©΄ μ΄λ κ°λ  iPadλ₯Ό λ³΄νΈν΄μ£Όλ μ¬λ¦Όνκ³  κ°λ²Όμ΄ μ»€λ²κ° λμ΄μ€λλ€.4
Smart Keyboardμ λν΄ λ μμλ³΄κΈ°

#### iPadOS

iPadOS. μμμ μ±κ³΅ λ°©μ μ.
λμ°ν Multi-Touch λμ€νλ μ΄λ₯Ό μν΄ λμμΈλ iPadOSλ κ°λ ₯νλ©΄μλ λκ΅¬λ  μμ½κ² μ¬μ©ν  μ μμ΅λλ€.
iPadOS 15μ μ¬μ©νκΈ° μ¬μ΄ λ©ν°νμ€νΉ κΈ°λ₯, μ λ³΄λ₯Ό κ²μνκ³  μ λ¦¬νλ μλ‘μ΄ λ°©μ, ν₯μλ λ©λͺ¨ κΈ°λ₯ λ±μ ν΅ν΄ iPadμ μ±λ₯μ νμΈ΅ λ λμ΄μ¬λ¦½λλ€.
iPadOSμ μλ‘μ΄ κΈ°λ₯ μ΄ν΄λ³΄κΈ°
Split Viewλ‘ μ΄λ―Έμ§λ₯Ό νΈμ§νλ©΄μ Mail μ±μ μ¬μ© μ€μΈ λͺ¨μ΅
λ κ°μ μ±, μλ‘ μμμ λκ³  μ°κΈ°
ν νλ©΄μ νμλ μμ ―
ν νλ©΄μ λ°λ‘ λ¨λ μμ ―
Safariμ λΉ λ₯Έ λ©λͺ¨
μ΄λμλ λ¨κΈ°λ λΉ λ₯Έ λ©λͺ¨

#### Apps

μ΄μ μ μ΄λ €μ€ λ€μν μ±.
iPadμλ μ΄λ―Έ βμ¬μ§β, βμ§λβ, βλ©μμ§β, Mail, Safari λ± κ°λ ₯ν Apple μ μ μ±λ€μ΄ κ°λ λ΄κ²¨μμ΅λλ€. κ²λ€κ° 100λ§ κ° μ΄μμ iPad μ μ© μ±μ΄ μ€λΉλ App Storeμμλ μ΄λ€ μμμ΄λ  κ±Έλ§μ μ±μ μ°Ύμ μ μμ£ . λΉνΈλ₯Ό μ°κ±°λ, μ΄λμ νκ±°λ, λ΄μ€λ₯Ό μ½μ μλ μμ΅λλ€. μ¬μ¬ν  λ μΉκ΅¬λ€κ³Ό μ λλ κ²μ ν νμ μ¦κΈΈ μλ μμ£ .
App Storeμμ iPadμ© μ± μ°Ύμλ³΄κΈ°
iPadμ MasterClass μ±μ΄ μ΄λ € μλ λͺ¨μ΅
Masterclass
iPadμ Adobe Fresco μ±μ΄ μ΄λ € μλ λͺ¨μ΅
Adobe Fresco
iPadμ Fantasian μ±μ΄ μ΄λ € μλ λͺ¨μ΅
Fantasian
iPadμ λμ μ±μ΄ μ΄λ € μλ λͺ¨μ΅
λμ μ±
iPadμ Goodnotes 5 μ±μ΄ μ΄λ € μλ λͺ¨μ΅
GoodNotes 5

#### Privacy

κ°μΈμ λ³΄ λ³΄νΈ κΈ°λ₯ λ΄μ₯.
λ€λ₯Έ λͺ¨λ  Apple μ νκ³Ό λ§μ°¬κ°μ§λ‘ iPad μ­μ λΉμ μ κ°μΈ μ λ³΄ λ³΄νΈ λ° λ³΄μμ μΌλμ λκ³  μ€κ³λμμ΅λλ€. κ²°μ½ μ½μ§λ§μ μμ μμμ΄μ£ . νμ§λ§ κ·Έλ° κ²λ§μ΄ μ§μ ν νμ μ΄λΌ μ°λ¦¬λ λ―Ώμ΅λλ€.
κ°μΈ μ λ³΄ λ³΄νΈλ₯Ό μνμ°λ¦¬μ λΈλ ₯μ λν΄ λ μμλ³΄κΈ°
Safariμ νμ
Appleλ‘ λ‘κ·ΈμΈ
μ§λ¬ΈμΌλ‘ λ‘κ·ΈμΈνκΈ°

#### Accessibility

λͺ¨λλ₯Ό μν΄ λ§λ€λ€.
λκ΅¬λ μ¬μ©ν  μ μλ κΈ°μ μ΄μΌλ§λ‘ κ°μ₯ κ°λ ₯ν κΈ°μ μλλ€. iPadμ μκ°, μ²­κ°, μ΄λ λ° μΈμ§λ₯λ ₯ λ±μ λ³΄μν΄μ£Όλ μμ¬μ΄ μ¬μ© κΈ°λ₯μ νμ¬ν μ΄μ λ λ°λ‘ κ·Έ λλ¬Έμ΄μ£ . κ·Έλ£Ή FaceTime ν΅ν μ€ μμ΄λ₯Ό μ¬μ©νλ μ¬λμ΄ μλ κ²½μ°, κ·Έ μ¬λμ΄ μ΄μΌκΈ° μ€μΈ κ²μ μ μ μλλ‘ ν΄λΉ νμΌμ λ ν¬κ² νμν΄μ£Όλ κ²μ΄ μ’μ μμλλ€.
λͺ¨λ  μμ¬μ΄ μ¬μ© κΈ°λ₯ μ΄ν΄λ³΄κΈ°
FaceTime μ±μΌλ‘ 4λͺμ΄ μμ΄λ‘ μμ ν΅ν

#### AR

AR Icon
ARλ‘ μλ‘μμ§ iPad λ―Έλ¦¬ λ³΄κΈ°.
iPhone λλ iPadμμ μ΄ νμ΄μ§λ₯Ό Safariλ‘ μ΄μ΄λ³΄μΈμ.
AR Image

#### Environment

Environment Icon
νκ²½
Appleμ μ νμ λΌμ΄ν μ¬μ΄ν΄ μ λ°μ κ±Έμ³ μ°λ¦¬μ νκ²½ λ°μκ΅­μ λν μ±μμ λ€ν©λλ€.
λͺ¨λ  Apple μ νκ³Ό ν¬μ₯μ¬μ 100% μ¬νμ© λ° μ¬μ κ°λ₯ μμ¬λ§μ΄ μ¬μ©λλ κ·Έλ μ μν΄ νμ μ μΈ λΈλ ₯μ κΈ°μΈμ΄κ³  μμ΅λλ€.
iPadλ νκ²½μ λ―ΈμΉλ μν₯μ μ€μ΄λλ‘ λ€μν νΉμ§μ μ μ©νμ¬ λμμΈλμμ΅λλ€.
Appleκ³Ό νκ²½μ λν΄ λ μμλ³΄κΈ°

#### Accessory Shop

iPadμ λ₯λ ₯μ ν€μμ£Όλ μ‘μΈμλ¦¬.
μΌμ΄μ€, μ»€λ², Apple Pencil, AirPods λ± λ€μν μ‘μΈμλ¦¬λ₯Ό λ§λλ³΄μΈμ.
iPad μ‘μΈμλ¦¬ μΌννκΈ°
λ€μν μ‘μΈμλ¦¬ μ΄λ―Έμ§

#### Trade

μ¬μ©νλ iPadλ₯Ό λ³΄μ νλ§€νλ©΄ μ λͺ¨λΈ
κ΅¬λ§€ μ μΈ μ μλ ν¬λ λ§μ΄.*
Apple Trade Inμ ν΅ν΄ λ³΄μ νλ§€ λμ iPadλ₯Ό μ iPad κ΅¬λ§€ μ μΈ μ μλ ν¬λ λ§μΌλ‘ κ΅νν  μ μμ΅λλ€.
κΈ°κΈ°μ κ°μΉλ₯Ό μ΅λν νμ©νλ κ², λΉμ μ λ¬Όλ‘  μ§κ΅¬μκ²λ μ’μ μΌμ΄μ£ .
λ³΄μ νλ§€ κ°κ²© μμλ³΄κΈ°

#### Compare

λΉμ μκ² λ§λ iPadλ?
iPad Pro
κΆκ·Ήμ iPadλμ΄λ° κ².
β©999,000λΆν°

iPad Air
κ°λ ₯νλ€. λ€μ±λ‘­λ€.κ²½μ΄λ‘­λ€.
β©779,000λΆν°

iPad
λ§μ‘±μ€λ¬μ΄ μ±λ₯.κΈ°λΆ μ’μ κ°κ²©.
β©449,000λΆν°

iPad Pro
λ©κ°κΈ μ±λ₯.ν¬κΈ°λ§ λ―Έλ.
β©649,000λΆν°

λͺ¨λ  iPad λͺ¨λΈ λΉκ΅νκΈ°
iPad μΌννκΈ°

#### Footer

λ¬΄λ£ μ΅μΌ λ°°μ‘ Icon
μλ¬΄μΌ κΈ°μ€ λ¬΄λ£ μ΅μΌ λ°°μ‘
μ€ν 3μ μ΄μ μ μ£Όλ¬Έλ μ¬κ³  λ³΄μ  μ νμ νν©λλ€.

κΈμ΅ νν Icon
κΈμ΅ νν
λ¬΄μ΄μ ν λΆλ₯Ό ν΅ν΄ Apple μ νμ λΆλ΄ μμ΄ κ΅¬λ§€νμ€ μ μμ΅λλ€.

κ°μΈ Icon
μ§μ  μμ λ§μ κ²μΌλ‘
μμ μ μ΄λ¦μ΄λ κ°μ± μλ λ¬Έκ΅¬λ₯Ό iPadμ λ¬΄λ£λ‘ κ°μΈν  μ μμ΅λλ€.

* λ³΄μ νλ§€ νλ‘κ·Έλ¨μ Appleμ ννΈλμ΄μ λλ¦½μ μΌλ‘ μ΄μλλ μ 3μ μμ²΄μ μν΄ μ κ³΅λ©λλ€. Apple λ° Appleμ κ³μ΄μ¬λ κ³ κ°κ³Ό ννΈλ κ° κ³μ½μ λΉμ¬μκ° μλλλ€. λ³΄μ νλ§€ κΈμ‘μ λ³΄μ νλ§€λλ iPadμ μν λ° λͺ¨λΈμ λ°λΌ λ¬λΌμ§λλ€. 19μΈ μ΄μμ΄μ΄μΌ ν©λλ€. μΌλΆ λ§€μ₯μμλ λ³Έ νλ‘κ·Έλ¨μ μ΄μ©ν  μ μμΌλ©°, μΌλΆ κΈ°κΈ°λ λ³΄μ νλ§€ λμμ΄ μλλλ€. Appleμ μ΄λ€ λ³΄μ νλ§€λ κ±°λλ₯Ό κ±°λΆνκ±°λ, μ νν  κ·λ¦¬λ₯Ό λ³΄μ ν©λλ€. μ Apple κΈ°κΈ° κ΅¬λ§€ μ, νμ¬ μμ ν κΈ°κΈ°μ κ°μΉλ§νΌ ν μΈμ λ°μ μλ μμ΅λλ€. μΆκ° μ½κ΄μ apple.com/kr/trade-inμ μ°Έκ³ νμ­μμ€.
λ°°ν°λ¦¬ μ¬μ© μκ°μ μ¬μ© ν¨ν΄ λ° μ€μ μ λ°λΌ λ€λ₯Ό μ μμ΅λλ€. μμΈν λ΄μ©μ apple.com/kr/batteriesλ₯Ό μ°Έκ³ νμ­μμ€.
μ§μ¬κ°ν κΈ°μ€μΌλ‘ μΈ‘μ νμ λ, iPad νλ©΄μ λκ°μ  κΈΈμ΄ κΈ°μ€ 25.91cmμλλ€.
λ°μ΄ν° μκΈμ μ κ°μν΄μΌ ν©λλ€. GigabitκΈ LTEλ μΌλΆ κ΅­κ°μμ μΌλΆ μ΄λν΅μ μ¬λ₯Ό ν΅ν΄ μ¬μ© κ°λ₯ν©λλ€. μλλ μ΄λ‘ μ  μ²λ¦¬λμ κ·Όκ±°ν μμΉμ΄λ©° μ₯μ λ° μ΄λν΅μ μ¬μ λ°λΌ λ€λ₯Ό μ μμ΅λλ€. LTE μ§μμ λν μμΈν λ΄μ©μ μ΄λν΅μ μ¬μ λ¬Έμνκ±°λ apple.com/kr/ipad/cellularλ₯Ό μ°Έκ³ νμ­μμ€.
Apple Pencil(1μΈλ) λ° Smart Keyboardλ λ³λλ‘ νλ§€λ©λλ€.
μ±μ App Storeμμ λ€μ΄λ‘λν  μ μμ΅λλ€. κ° μ±μ μΆμ μ¬λΆλ λ³κ²½λ  μ μμ΅λλ€.
AirPods(2μΈλ) λ¬΄μ  μΆ©μ  μΌμ΄μ€ λͺ¨λΈ λ° μ‘μΈμλ¦¬λ λ³λλ‘ νλ§€λ©λλ€.

λ€μν μΌν λ°©λ²: Apple Storeλ₯Ό λ°©λ¬Ένκ±°λ, λ¦¬μλ¬λ₯Ό μ°Ύμλ³΄κ±°λ, 080-330-8877λ²μΌλ‘ μ ννμΈμ.
Copyright Β© 2023 Apple Inc. λͺ¨λ  κΆλ¦¬ λ³΄μ .
κ°μΈμ λ³΄ μ²λ¦¬λ°©μΉ¨
μΉ μ¬μ΄νΈ μ΄μ© μ½κ΄
νλ§€ λ° νλΆ
λ²μ  κ³ μ§
μ¬μ΄νΈ λ§΅
λνλ―Όκ΅­
```

