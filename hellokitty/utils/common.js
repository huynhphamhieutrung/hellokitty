export default {
    get uniqueId() {
      return Math.random().toString(36).replace('.', '_');
    }
  }
  