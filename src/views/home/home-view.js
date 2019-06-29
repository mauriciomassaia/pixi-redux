import { createRect } from '../../utils/pixi'
import BaseView from '../base-view'

export default class HomeView extends BaseView {
  constructor (size) {
    super('home', size)
    const bg = createRect(0, 0, size.width, size.height * 0.5, 0x7a7a78)
    this.addChild(bg)
  }
}
