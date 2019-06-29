import { createRect } from '../../utils/pixi'
import BaseView from '../base-view'

export default class GameView extends BaseView {
  constructor (size) {
    super('game', size)
    const bg = createRect(0, 0, size.width, size.height * 0.5, 0xFF6B6B)
    this.addChild(bg)
  }
}
