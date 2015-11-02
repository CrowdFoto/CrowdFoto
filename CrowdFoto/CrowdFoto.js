Goals = new Mongo.Collection("goals");
Levels = new Mongo.Collection("levels");
Tools = new Mongo.Collection("tools");
Images = new Mongo.Collection("images"); // Guessing this will change


if (Meteor.isClient) {

  Template.uploadPhoto.helpers({
    goals: function () {
      return Goals.find({});
    }
  });

  Template.partitionPage.helpers({
    goals: function () {
      return Goals.find({});
    },
    tools: function () {
      return Tools.find({});
    },
    levels: function () {
      return Levels.find({});
    }
  });

  Template.editPage.helpers({
    goals: function () {
      return Goals.find({});
    },
    tools: function () {
      return Tools.find({});
    },
    levels: function () {
      return Levels.find({});
    }
  });

  Template.verifyPage.helpers ({
    imagesToVerify: function () {
      return Images.find({});
    } //function to load images - only important piece is that it is labeled imagesToVerify
  })

  Template.uploadPhoto.events({
    "submit .new-goal": function (event) {
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

    Template.partitionPage.events({
    "submit .new-tool": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value froms form element
      var text = event.target.text.value;
 
      // Insert a task into the collection
      Tools.insert({
        text: text,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
    },
    "submit .new-level": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value froms form element
      var text = event.target.text.value;
 
      // Insert a task into the collection
      Levels.insert({
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

  Template.editableLevel.events({
    "click .delete": function () {
      Levels.remove(this._id);
    }
  });

  Template.editableTool.events({
    "click .delete": function () {
      Tools.remove(this._id);
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
