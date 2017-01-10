import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addUser(login) {
      const user = this.store.find('user', login);

      this.transitionToRoute('user', user);
    }
  }
});
