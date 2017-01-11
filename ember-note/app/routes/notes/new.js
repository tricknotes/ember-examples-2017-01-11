import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const maxId = this.modelFor('notes')
      .mapBy('id')
      .sort((a, b) => b - a)[0];

    return {id: String(Number(maxId || 0) + 1)};
  },
  actions: {
    addNote(model) {
      this.modelFor('notes').pushObject(model);

      this.transitionTo('notes.show', model);
    }
  }
});
