import Ember from 'ember';

export default Ember.Route.extend({
session: Ember.inject.service(),


 firebase: Ember.inject.service(),

  actions: {
    signIn(params) {
      console.log(params);
       var self = this;

       this.get('session').open('firebase', {
         provider: 'password',
         email: params.email,
         password: params.password
       }).then(function(data) {
         console.log(data.currentUser);
       });
     },
        //  email: params.email || '',
        //  password: params.password || '',
        //  alert("asdad");
        //  self.set('email', null);
        //  self.set('password', null);
        //  self.transitionToRoute('index');
      }
});
