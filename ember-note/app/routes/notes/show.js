import Ember from 'ember';

export default Ember.Route.extend({
  model({id}) {
    return this.modelFor('notes').findBy('id', id);
  }
});
