import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      repository: payload
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      repositories: payload
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
