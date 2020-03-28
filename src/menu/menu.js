import { Container, Text } from 'pixi.js'
import gsap from 'gsap'
import store from '../store'
import { setView } from '../actions'
import { getSize, getView } from '../selectors'
import { createRect } from '../utils/pixi'

export default class Menu extends Container {
  constructor () {
    super()

    const r = createRect(0, -20, 80, 80, 0xff99ff)
    r.x = -200
    this.addChild(r)

    const labels = ['home', 'hype', 'game', 'end']
    labels.forEach((l, i) => {
      const t = new Text(l, {
        fontFamily: 'Arial',
        fontSize: 20,
        fill: 0x000000,
        align: 'center'
      })
      this.addChild(t)
      t.interactive = true
      t.viewName = l
      t.x = i * 80
      t.on('click', () => {
        console.log('click')
        store.dispatch(setView(t.viewName))
      })
    })

    store.subscribe(() => {
      const state = store.getState()

      const view = getView(state)
      this.children.forEach(c => {
        if (c.viewName === view) {
          gsap.to(r, {
            duration: 0.3,
            width: c.width + 20,
            x: c.x - 10,
            ease: 'power2.inOut'
          })
        }
      })

      this.updatePosition(state)
    })

    this.updatePosition(store.getState())
  }

  updatePosition (state) {
    const size = getSize(state)
    this.x = 50
    this.y = size.height - 50
  }
}
