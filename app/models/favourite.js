import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  poster_path: attr('string')
});
