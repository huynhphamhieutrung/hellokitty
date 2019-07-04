import {Collection} from 'vue-mc'
import DemoPoints from './demo-poins'

export default class extends Collection {
  // noinspection JSMethodCanBeStatic
  defaults() {
    return {
      id: '',
      type: '',
      image: '',
      position: '',
      points: null,
    }
  }

  // noinspection JSMethodCanBeStatic
  mutations() {
    return {
      id: Number,
      type: String,
      image: String,
      position: Number,
      points: DemoPoints,
    }
  }
}
