import Serializer from './application';

export default Serializer.extend({
  primaryKey: 'login',

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    payload.links = {
      starred: `${payload.url}/starred`
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
