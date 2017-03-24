import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    login(){
      var params = {
        user: this.get('user'),
        password: this.get('password'),
        users: this.get('model')
      };
      this.sendAction('login', params);
    },
  }
});
