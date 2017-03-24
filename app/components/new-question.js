import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    ask() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        body: this.get('body')
      }
      this.sendAction('ask', params);
    }
  }
});
