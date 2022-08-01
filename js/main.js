import ipads from '../data/ipads.js'
import navigations from '../data/navigations.js'


// 장바구니!
const basketEl = document.querySelector('header .basket')
const basketStarterEl = document.querySelector('header .basket-starter')

// 이벤트 청취
basketStarterEl.addEventListener('click', event => {
  event.stopPropagation() // 이벤트 버블링 정지!
  if (basketEl.classList.contains('show')) {
    hideBasket()
  } else {
    showBasket()
  }
})
basketEl.addEventListener('click', event => {
  event.stopPropagation()
})
window.addEventListener('click', () => {
  hideBasket()
})

function showBasket() {
  basketEl.classList.add('show')
}
function hideBasket() {
  basketEl.classList.remove('show')
}


// 헤더 검색!
const headerEl = document.querySelector('header')
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchShadowEl = searchWrapEl.querySelector('.shadow')
const searchCloseerEl = searchWrapEl.querySelector('.search-closer')
const searchCancel = searchWrapEl.querySelector('.search-cancel')
const textFieldEl = searchWrapEl.querySelector('.textfield')
const textFieldInputEl = textFieldEl.querySelector('input')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]
const duration = .4 // seconds

searchStarterEl.addEventListener('click', showSearch)
searchCloseerEl.addEventListener('click', event => {
  event.stopPropagation() // 이 클릭 이벤트가 버블링되어 textFieldEl가 클릭되는 것(모바일)을 방지
  hideSearch()
})
searchShadowEl.addEventListener('click', hideSearch)

function showSearch() {
  headerEl.classList.add('searching')
  headerMenuEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${index * duration / headerMenuEls.length}s` // 순서 * 지연 시간 / 애니메이션할 요소 개수
  })
  searchDelayEls.forEach((el, index) => {
    el.style.transitionDelay = `${index * duration / searchDelayEls.length}s`
  })
  // 검색 인풋 요소가 나타난 후 동작!
  setTimeout(() => {
    textFieldInputEl.focus()
  }, 600);
  stopScroll()
}
function hideSearch() {
  headerEl.classList.remove('searching')
  headerMenuEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${index * duration / headerMenuEls.length}s`
  })
  textFieldInputEl.value = '' // 입력값 초기화
  playScroll()
}
function playScroll() {
  // documentElement is <html>
  document.documentElement.style.position = 'static'
  document.documentElement.style.overflowY = 'visible'
  document.documentElement.style.width = 'auto'
}
function stopScroll() {
  document.documentElement.style.position = 'fixed'
  document.documentElement.style.overflowY = 'scroll'
  document.documentElement.style.width = '100%'
}


// 헤더 검색 모바일!
textFieldEl.addEventListener('click', () => {
  headerEl.classList.add('searching--mobile')
  textFieldInputEl.focus()
})
searchCancel.addEventListener('click', () => {
  headerEl.classList.remove('searching--mobile')
})


// 헤더 메뉴 토글 모바일!
const menuStarterEl = document.querySelector('header .menu-starter')
menuStarterEl.addEventListener('click', () => {
  if (headerEl.classList.contains('menuing')) {
    headerEl.classList.remove('menuing')
    textFieldInputEl.value = ''
    playScroll()
  } else {
    headerEl.classList.add('menuing')
    stopScroll()
  }
})


// 네비게이션 메뉴 토글 모바일!
const navEl = document.querySelector('nav')
const navMenuTogglerEl = navEl.querySelector('.menu-toggler')
const navMenuShadowEl = navEl.querySelector('.shadow')
navMenuTogglerEl.addEventListener('click', () => {
  if (navEl.classList.contains('menuing')) {
    hideNavMenu()
  } else {
    showNavMenu()
  }
})
navEl.addEventListener('click', event => {
  event.stopPropagation()
})
navMenuShadowEl.addEventListener('click', () => {
  hideNavMenu()
})
window.addEventListener('click', () => {
  hideNavMenu()
})

function showNavMenu() {
  navEl.classList.add('menuing')
}
function hideNavMenu() {
  navEl.classList.remove('menuing')
}


// 요소의 가시성 관찰
const infoEls = [...document.querySelectorAll('.info')]
const io = new IntersectionObserver(entries => {
  // entries는 `io.observe(el)`로 등록된 모든 관찰 대상 배열.
  entries.forEach(entry => {
     // 사라질 때.
    if (!entry.isIntersecting) {
      return
    }
    entry.target.classList.add('show')
  })
}, {
  rootMargin: '0px 0px -50px 0px'
})
infoEls.forEach(el => io.observe(el))


// 비디오 재생!
const video = document.querySelector('.stage video')
const playBtn = document.querySelector('.stage .controller__play')
const pauseBtn = document.querySelector('.stage .controller__pause')

function played() {
  console.log('played!')
  playBtn.classList.add('hide')
  pauseBtn.classList.remove('hide')
}
function paused() {
  console.log('paused!')
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
}

// Google 자동 재생 정책 확인! - https://developer.chrome.com/blog/autoplay/#audiovideo-elements
video.play()
  .then(played)
  .catch(paused)

playBtn.addEventListener('click', () => {
  video.play()
  played()
})
pauseBtn.addEventListener('click', () => {
  video.pause()
  paused()
})


// '당신에게 맞는 iPad는?' 랜더링!
const itemsEl = document.querySelector('section.compare .items')
ipads.forEach(ipad => {
  const itemEl = document.createElement('div')
  itemEl.classList.add('item')

  let colorList = ''
  ipad.colors.forEach(color => {
    colorList += `<li style="background-color: ${color};"></li>`
  })

  // VS Code 확장 프로그램 - Comment tagged templates
  itemEl.innerHTML = /* html */ `
    <div class="thumbnail">
      <img src="${ipad.thumbnail}" alt="${ipad.name}" />
    </div>
    <ul class="colors">
      ${colorList}
    </ul>
    <h3 class="name">${ipad.name}</h3>
    <p class="tagline">${ipad.tagline}</p>
    <p class="price">₩${ipad.price.toLocaleString('en-US')}부터</p>
    <button class="btn">구입하기</button>
    <a href="${ipad.url}" class="link">더 알아보기</a>
  `

  itemsEl.append(itemEl)
})


// 푸터 내비게이션 맵 랜더링!
const mapsEl = document.querySelector('footer .navigations .maps')
navigations.forEach(nav => {
  const mapEl = document.createElement('div')
  mapEl.classList.add('map')

  let mapList = ''
  nav.maps.forEach(map => {
    mapList += `<li>
      <a href="${map.url}">${map.name}</a>
    </li>`
  })

  mapEl.innerHTML = /* html */ `
    <h3>
      <span class="text">${nav.title}</span>
      <span class="icon">+</span>
    </h3>
    <ul>
      ${mapList}
    </ul>
  `

  mapsEl.append(mapEl)
})


// 푸터 내비게이션 맵 아코디언
const mapEls = [...document.querySelectorAll('footer .navigations .map')]
mapEls.forEach(el => {
  const h3El = el.querySelector('h3')
  h3El.addEventListener('click', () => {
    el.classList.toggle('active')
  })
})


// 올해 연도를 적용!
const thisYearEl = document.querySelector('.this-year')
thisYearEl.textContent = new Date().getFullYear()
