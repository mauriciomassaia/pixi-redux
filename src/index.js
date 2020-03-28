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

// load assets first then dispatch init
store.dispatch(init({
  size: { width: window.innerWidth, height: window.innerHeight }
}))
