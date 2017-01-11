import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    addNote() {
      const attrs = this.modelFor('notes.new');
      const model = this.store.createRecord('note', attrs);

      model.save().then(() => {
        this.transitionTo('notes.show', model);
      });
    }
  }
});
