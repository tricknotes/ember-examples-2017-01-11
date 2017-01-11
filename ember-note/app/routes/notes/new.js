import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    addNote(attrs) {
      const model = this.store.createRecord('note', attrs);

      this.transitionTo('notes.show', model);
    }
  }
});
