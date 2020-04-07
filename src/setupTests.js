import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

Enzyme.configure({
  adapter: new Adapter(),
})

global.requestAnimationFrame = function (callback) {
  this.setTimeout(callback, 0)
}
