import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'login',

  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    payload.links = {
      starred: `${payload.url}/starred`
    };

    payload = {
      user: payload
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
