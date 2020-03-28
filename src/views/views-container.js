import { Container } from 'pixi.js'
import { getSize, getView } from '../selectors'
import store from '../store'
import EndView from './end/end-view'
import HomeView from './home/home-view'
import HypeView from './hype/hype-view'
import GameView from './game/game-view'

export default class ViewsContainer extends Container {
  constructor () {
    super()

    this.state = store.getState()

    this.unsubscribe = store.subscribe(() => this.onStoreChange())
    this.view = null
    this.viewsMap = new Map()

    this.size = getSize(this.state)
    const views = [HomeView, HypeView, GameView, EndView]
    views.forEach(View => {
      const v = new View(this.size)
      this.viewsMap.set(v.viewName, v)
      this.addChild(v)
    })
  }

  onStoreChange () {
    const oldState = this.state
    const newState = store.getState()
    this.state = newState
    this.checkView(oldState, newState)
  }

  checkView (oldState, newState) {
    const currentView = getView(oldState)
    const newView = getView(newState)

    if (newView === currentView) return
    // show new view
    clearTimeout(this.timeout)
    const cur = this.viewsMap.get(currentView)
    const next = this.viewsMap.get(newView)

    if (next) {
      next.once('open-complete', this.onNextViewOpenComplete, this)
      next.once('open-start', this.onNextViewOpenStart, this)
    }

    if (cur) {
      cur.removeListener('open-start', this.onNextViewOpenStart, this)
      cur.removeListener('open-complete', this.onNextViewOpenComplete, this)
    }

    if (cur && next) {
      this.enableInteraction(false)
      cur.once('close-complete', next.open, next)
      cur.close()
    } else if (cur) {
      cur.close()
    } else if (next) {
      // firtst view
      next.open()
    }
  }

  resize (size) {
    this.viewsMap.forEach(v => v.resize(size))
  }

  enableInteraction (value) {}

  onNextViewOpenStart () {}

  onNextViewOpenComplete () {
    this.enableInteraction(true)
  }
}
