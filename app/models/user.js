import DS from 'ember-data';

export default DS.Model.extend({
  password: DS.attr(),
  user: DS.attr()
});
