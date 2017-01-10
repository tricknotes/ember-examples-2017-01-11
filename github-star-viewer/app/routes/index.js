import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addUser(login) {
      const user = this.store.findRecord('user', login);

      this.transitionTo('user', user);
    }
  }
});
