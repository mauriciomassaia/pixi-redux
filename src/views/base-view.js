import { Container } from 'pixi.js'
import gsap from 'gsap'

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
    gsap.to(this, {
      duration: 0.3,
      alpha: 0,
      ease: 'power2.in',
      onComplete: () => this.closeComplete()
    })
  }

  open () {
    this.visible = true
    this.emit('open-start')
    gsap.killTweensOf(this)
    gsap.to(this, {
      duration: 0.3,
      alpha: 1,
      ease: 'power2.Out',
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
