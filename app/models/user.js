import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  email: attr(),
  password: attr(),
  avatar: attr(),
  game: belongsTo('game', {async: true}),
  target: attr(),
  kill: attr()
});
