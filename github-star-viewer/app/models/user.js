import DS from 'ember-data';

export default DS.Model.extend({
  login: DS.attr(),
  avatar_url: DS.attr(),

  starred: DS.hasMany('repository')
});
