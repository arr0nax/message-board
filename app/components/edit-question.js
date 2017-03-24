import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    showForm() {
      this.set('showForm', true);
    },

    editQuestion(question) {
      var params = {
        author: this.get('newauthor'),
        question: this.get('newquestion'),
        body: this.get('newbody')
      };
      this.set('showForm', false);
      this.sendAction('update', question, params);

    }

  }
});
