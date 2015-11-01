Goals = new Mongo.Collection("goals");

if (Meteor.isClient) {

  Template.photoUploader.helpers({
    goals: function () {
      return Goals.find({});
    }
  });

  Template.photoUploader.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value froms form element
      var text = event.target.text.value;
 
      // Insert a task into the collection
      Goals.insert({
        text: text,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
    }
  });

  Template.editableGoals.events({
    "click .delete": function () {
      Goals.remove(this._id);
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
