import { createRect } from '../../utils/pixi'
import BaseView from '../base-view'

export default class HypeView extends BaseView {
  constructor (size) {
    super('hype', size)
    const bg = createRect(0, 0, size.width, size.height * 0.5, 0xfbcb00)
    this.addChild(bg)
  }
}
