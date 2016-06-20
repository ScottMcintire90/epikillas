import Ember from 'ember';

export default Ember.Component.extend({
  addNewGame: false,

  actions: {
    gameFormShow(){
      this.set('addNewGame', true);
    },

    saveGame(){
      var params = {
        name: this.get('name'),
        organization: this.get('organization'),
        theme: this.get('theme'),
        rules: this.get('rules'),
        weapon: this.get('weapon'),
        adminName: this.get('adminName'),
        adminPassword: this.get('adminPassword'),
        users: this.get('users'),
      }
      this.set('addNewGame', false);
      this.sendAction('saveGame', params);
      this.set("name", "");
      this.set("organization", "");
      this.set("theme", "");
      this.set("rules", "");
      this.set("weapon", "");
      this.set("adminName", "");
      this.set("adminPassword", "");
      this.set("users", "");
    }
  }
});
