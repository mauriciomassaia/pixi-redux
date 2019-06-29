import { Container } from 'pixi.js'
import { TweenMax, Power2 } from 'gsap'

export default class BaseView extends Container {
  constructor (viewName, size) {
    super()
    this.viewName = viewName
    this.size = size
    this.visible = false
    this.alpha = 0
  }

  setMode (value) {
    this.mode = value
  }

  close () {
    this.emit('close-start')
    TweenMax.to(this, 0.3, {
      alpha: 0,
      ease: Power2.easeInOut,
      onComplete: () => this.closeComplete()
    })
  }

  open () {
    this.visible = true
    this.emit('open-start')
    TweenMax.killTweensOf(this)
    TweenMax.to(this, 0.3, {
      alpha: 1,
      ease: Power2.easeInOut,
      onComplete: () => this.openComplete()
    })
  }

  closeComplete () {
    this.emit('close-complete')
    this.visible = false
  }

  openComplete () {
    this.emit('open-complete')
  }

  resize (size) {
    this.size = size
  }
}
