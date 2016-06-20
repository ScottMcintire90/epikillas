import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    displayUser() {
      debugger;
      
      console.log(this.get('games').get('firstObject').get('user'));

    }
  }
});
