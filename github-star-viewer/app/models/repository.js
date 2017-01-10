import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  html_url: DS.attr(),
  full_name: DS.attr(),
  watchers: DS.attr(),
  language: DS.attr(),
  description: DS.attr(),
  owner: DS.attr()
});
