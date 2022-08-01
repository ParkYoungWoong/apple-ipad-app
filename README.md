[![Netlify Status](https://api.netlify.com/api/v1/badges/d07cf9d9-8012-4144-ba84-a8af40458941/deploy-status)](https://app.netlify.com/sites/transcendent-naiad-733465/deploys)

# 🍏 iPad

아이패드 제품 페이지를 만드는 예제입니다.

[DEMO](https://transcendent-naiad-733465.netlify.app/)

![Screenshots](./images/screenshot1.jpg)

### Assets

강의 예제에서 사용하는 이미지와 영상 등 에셋을 다운로드합니다.

[에셋 다운로드](https://github.com/ParkYoungWoong/apple-ipad-app/blob/main/assets.zip)

### Reset.css

각 브라우저의 기본 스타일을 초기화합니다.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

### Google Fonts

Apple SF Pro 폰트는 공유 및 배포할 수 없기 때문에,  
가장 유사한 웹 폰트로 대체합니다.

영문: [Roboto](https://fonts.google.com/specimen/Roboto)
한글: [Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

### 오픈 그래프 및 트위터 카드 정보

웹페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

```html
<!--Open Graph-->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Apple (KR)" />
<meta property="og:title" content="iPad 10.2" />
<meta property="og:description" content="강력한 A13 Bionic 칩을 탑재한 iPad. 센터 스테이지 기술이 적용된 12MP 울트라 와이드 전면 카메라, True Tone 디스플레이 기술 및 64GB 저장 용량까지 갖췄습니다." />
<meta property="og:image" content="./images/ipad-seo.png" />
<meta property="og:url" content="https://www.apple.com/kr/ipad-10.2/" />

<!--Twitter Card-->
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Apple (KR)" />
<meta property="twitter:title" content="iPad 10.2" />
<meta property="twitter:description" content="강력한 A13 Bionic 칩을 탑재한 iPad. 센터 스테이지 기술이 적용된 12MP 울트라 와이드 전면 카메라, True Tone 디스플레이 기술 및 64GB 저장 용량까지 갖췄습니다." />
<meta property="twitter:image" content="./images/ipad-seo.png" />
<meta property="twitter:url" content="https://www.apple.com/kr/ipad-10.2/" />
```

### iPad 종류

```js
export default [
  {
    thumbnail: './images/compare_ipad_pro.png',
    colors: ['#68696D', '#E2E3E5'],
    name: 'iPad Pro',
    tagline: '궁극의 iPad란<br />이런 것.',
    price: 999000,
    url: '/ipad-pro/'
  },
  {
    thumbnail: './images/compare_ipad_air.png',
    colors: ['#68696D', '#E2E3E5', '#E8D2CE', '#B9B8D1', '#88AEBF'],
    name: 'iPad Air',
    tagline: '강력하다. 다채롭다.<br />경이롭다.',
    price: 779000,
    url: '/ipad-air/'
  },
  {
    thumbnail: './images/compare_ipad_10_2.png',
    colors: ['#68696D', '#E2E3E5'],
    name: 'iPad',
    tagline: '만족스러운 성능.<br />기분 좋은 가격.',
    price: 449000,
    url: '/ipad-10.2/'
  },
  {
    thumbnail: './images/compare_ipad_mini.png',
    colors: ['#68696D', '#E2E3E5', '#E8D2CE', '#B9B8D1'],
    name: 'iPad Pro',
    tagline: '메가급 성능.<br />크기만 미니.',
    price: 649000,
    url: '/ipad-mini/'
  }
]
```

### 푸터 메뉴

```js
export default [
  {
    title: '쇼핑 및 알아보기',
    maps: [
      { name: '스토어', url: '/shop/goto/store' },
      { name: 'Mac', url: '/mac' },
      { name: 'iPad', url: '/ipad' },
      { name: 'iPhone', url: '/iphone' },
      { name: 'Watch', url: '/watch' },
      { name: 'AirPods', url: '/airpods' },
      { name: 'TV 및 홈', url: '/tv-home' },
      { name: 'AirTag', url: '/airtag' },
      { name: '액세서리', url: '/shop/goto/buy_accessories' }
    ]
  },
  {
    title: '서비스',
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
    title: '계정',
    maps: [
      { name: 'Apple ID 관리', url: 'https://appleid.apple.com' },
      { name: 'Apple Store 계정', url: '/shop/goto/account' },
      { name: 'iCloud.com', url: 'https://www.icloud.com' }
    ]
  },
  {
    title: 'Apple Store',
    maps: [
      { name: '매장 찾기', url: '/retail' },
      { name: 'Genius Bar', url: '/retail/geniusbar' },
      { name: 'Today at Apple', url: '/today' },
      { name: 'Apple 캠프', url: '/today/camp' },
      { name: 'Apple Store 앱', url: 'https://apps.apple.com/app/apple-store/id375380948' },
      { name: '리퍼 및 특가 제품', url: '/shop/goto/special_deals' },
      { name: '금융 혜택', url: '/shop/goto/financing' },
      { name: 'Apple Trade In', url: '/trade-in' },
      { name: '주문 상태', url: '/shop/goto/order/list' },
      { name: '쇼핑 도움말', url: '/shop/goto/help' }
    ]
  },
  {
    title: '비즈니스',
    maps: [
      { name: 'Apple과 비즈니스', url: '/business' },
      { name: '비즈니스를 위한 제품 쇼핑하기', url: '/retail/business' }
    ]
  },
  {
    title: '교육',
    maps: [
      { name: 'Apple과 교육', url: '/education' },
      { name: '초중고용 제품 쇼핑하기', url: '/education/k12/how-to-buy' },
      { name: '대학 생활을 위한 제품 쇼핑하기', url: '/shop/goto/educationrouting' }
    ]
  },
  {
    title: 'Apple의 가치관',
    maps: [
      { name: '손쉬운 사용', url: '/accessibility' },
      { name: '환경', url: '/environment' },
      { name: '개인정보 보호', url: '/privacy' },
      { name: '협력업체에 대한 책임', url: '/supplier-responsibility' }
    ]
  },
  {
    title: 'Apple 정보',
    maps: [
      { name: 'Newsroom', url: '/newsroom' },
      { name: 'Apple 리더십', url: '/leadership' },
      { name: '채용 안내', url: '/careers' },
      { name: '윤리 및 규정 준수', url: '/compliance' },
      { name: '이벤트', url: '/apple-events' },
      { name: '일자리 창출', url: '/job-creation' },
      { name: 'Apple 연락처', url: '/contact' }
    ]
  }
]
```

### Sprite Icon Animation

여러 이미지를 한 이미지로 합쳐 관리하는 방식을 **이미지 스프라이트 기법** 이라고 합니다.

![이미지 스프라이트](./images/sprite_apps.png)

```css
@keyframes sprite-icon {
  /* 1~ */
  0.00% { background-position: 0 0 }
  1.66% { background-position: -100px 0 }
  3.32% { background-position: -200px 0 }
  4.98% { background-position: -300px 0 }
  6.64% { background-position: -400px 0 }

  8.30% { background-position: -500px 0 }
  9.96% { background-position: 0 -100px }
  11.62% { background-position: -100px -100px }
  13.28% { background-position: -200px -100px }
  14.94% { background-position: -300px -100px }

  /* 11~ */
  16.60% { background-position: -400px -100px }
  18.26% { background-position: -500px -100px }
  19.92% { background-position: 0 -200px }
  21.58% { background-position: -100px -200px }
  23.24% { background-position: -200px -200px }

  24.90% { background-position: -300px -200px }
  26.65% { background-position: -400px -200px }
  28.22% { background-position: -500px -200px }
  29.88% { background-position: 0 -300px }
  31.54% { background-position: -100px -300px }

  /* 21~ */
  33.20% { background-position: -200px -300px }
  34.86% { background-position: -300px -300px }
  36.52% { background-position: -400px -300px }
  38.18% { background-position: -500px -300px }
  39.84% { background-position: 0 -400px }

  41.50% { background-position: -100px -400px }
  43.16% { background-position: -200px -400px }
  44.82% { background-position: -300px -400px }
  46.48% { background-position: -400px -400px }
  48.14% { background-position: -500px -400px }

  /* 31~ */
  49.80% { background-position: 0 -500px }
  51.46% { background-position: -100px -500px }
  53.12% { background-position: -200px -500px }
  54.78% { background-position: -300px -500px }
  56.44% { background-position: -400px -500px }

  58.10% { background-position: -500px -500px }
  59.76% { background-position: 0 -600px }
  61.42% { background-position: -100px -600px }
  63.08% { background-position: -200px -600px }
  64.74% { background-position: -300px -600px }

  /* 41~ */
  66.40% { background-position: -400px -600px }
  68.06% { background-position: -500px -600px }
  69.72% { background-position: 0 -700px }
  71.38% { background-position: -100px -700px }
  73.04% { background-position: -200px -700px }

  74.70% { background-position: -300px -700px }
  76.36% { background-position: -400px -700px }
  78.02% { background-position: -500px -700px }
  79.68% { background-position: 0 -800px }
  81.34% { background-position: -100px -800px }

  /* 51 */
  83.00% { background-position: -200px -800px }
  84.66% { background-position: -300px -800px }
  86.32% { background-position: -400px -800px }
  87.98% { background-position: -500px -800px }
  89.64% { background-position: 0 -900px }

  91.30% { background-position: -100px -900px }
  92.96% { background-position: -200px -900px }
  94.62% { background-position: -300px -900px }
  96.28% { background-position: -400px -900px }
  97.94% { background-position: -500px -900px }

  100.0% { background-position: 0 0; }
}
```
