import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    answer() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        answer: this.get('answer'),
        question: this.get('question')
      };
      this.sendAction('answer', params)
    }
  }
});
