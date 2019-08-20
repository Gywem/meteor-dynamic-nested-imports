import { Meteor } from 'meteor/meteor';

function insertLink(title, url) {
  import Links from 'imports/api/links';

  Links.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  import Links from 'imports/api/links';

  // If the Links collection is empty, add some data.
  if (Links.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }
});
