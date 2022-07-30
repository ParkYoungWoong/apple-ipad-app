[![Netlify Status](https://api.netlify.com/api/v1/badges/d07cf9d9-8012-4144-ba84-a8af40458941/deploy-status)](https://app.netlify.com/sites/transcendent-naiad-733465/deploys)

# 🍏 iPad

아이패드 제품 페이지를 만드는 예제입니다.

[DEMO](https://transcendent-naiad-733465.netlify.app/)

![Screenshots](./images/screenshot1.jpg)

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