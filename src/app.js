import { Application } from 'pixi.js'
import ViewsContainer from './views/views-container'
import Menu from './menu/menu'

let app

export function start () {
  if (app) return
  app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio || 1,
    antialias: true,
    backgroundColor: 0xf3f3f3
  })
  document.body.appendChild(app.view)
  app.stage.addChild(new ViewsContainer())
  app.stage.addChild(new Menu())
  app.start()
}

export function destroy () {
  if (app) {
    app.stop()
    app.destroy()
    app = null
  }
}
