import Ember from 'ember';
console.log('welcome home');
export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  }
});
