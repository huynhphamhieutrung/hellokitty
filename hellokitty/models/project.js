import {Model} from 'vue-mc'
import Common from './utils/common';
import Page from './page';

export default class extends Model {
  // noinspection JSMethodCanBeStatic
  defaults() {
    return {
      id: Common.uniqueId,
      name: '',
      projectType: '',
      thumbnailsmall: '',
      thumbnail: '',
      shortDescription: '',
      description: '',
      page: null,
    }
  }

  // noinspection JSMethodCanBeStatic
  mutations() {
    return {
      id: String,
      name: String,
      projectType: String,
      thumbnailsmall: String,
      thumbnail: String,
      shortDescription: String,
      description: String,
      page: Page,
    }
  }
}
