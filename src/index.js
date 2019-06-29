import store from './store'
import { init } from './actions'
import { getSize } from './selectors'
import { start } from './app'

const unsub = store.subscribe(() => {
  const size = getSize(store.getState())
  if (size.width > 0 && size.height > 0) {
    unsub()
    start()
  }
})

store.dispatch(init({
  resolution: 1,
  size: { width: window.innerWidth, height: window.innerHeight },
  mode: 'who-knows'
}))

// const views = ['home', 'hype', 'game', 'end']
// window.addEventListener('mousedown', () => {
//   const view = views.shift()
//   console.log(setView, view)
//   store.dispatch(setView({ view }))
//   views.push(view)
//   console.log('views order', views)
// })
