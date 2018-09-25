import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      favourite:payload.results
    };
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
