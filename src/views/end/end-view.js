import { createRect } from '../../utils/pixi'
import BaseView from '../base-view'

export default class EndView extends BaseView {
  constructor (size) {
    super('end', size)
    const bg = createRect(0, 0, size.width, size.height * 0.5, 0xBDB4F0)
    this.addChild(bg)
  }
}
