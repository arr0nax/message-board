import Ember from 'ember';
console.log('welcome home');
export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      users: this.store.findAll('user')
    });
  },

  actions: {
    ask(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

  }
});
