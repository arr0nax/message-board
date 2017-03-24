import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },

  actions: {
    login(params,model){
      console.log(params);
      console.log(model);
    }
  }
});
