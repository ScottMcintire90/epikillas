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
        rule: this.get('rule'),
        weapon: this.get('weapon'),
        adminName: this.get('adminName'),
        adminPassword: this.get('adminPassword'),
        user: this.get('user'),
      }
      this.set('addNewGame', false);
      this.sendAction('saveGame', params);
      this.set("name", "");
      this.set("organization", "");
      this.set("rule", "");
      this.set("weapon", "");
      this.set("adminName", "");
      this.set("adminPassword", "");
      this.set("user", "");
    }
  }
});
