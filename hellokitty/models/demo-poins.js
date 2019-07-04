import {Collection} from 'vue-mc'

export default class extends Collection {
  // noinspection JSMethodCanBeStatic
  defaults() {
    return {
      page_id: '',
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      target: '',
    }
  }

  // noinspection JSMethodCanBeStatic
  mutations() {
    return {
      page_id: String,
      left: Number,
      top: Number,
      width: Number,
      height: Number,
      target: String,
    }
  }
}
