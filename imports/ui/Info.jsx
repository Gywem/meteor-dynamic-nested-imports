import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from "../api/links";

export const DEFAULT_LINK_TARGET = '_blank';

const getLinkAsync = () => {
  import {LinkAsync} from "imports/app-level/link-async";
  import * as things from "meteor/package-level/link-async";
  import * as thing from "meteor/nested-package-level/link-async";
  import Links from 'imports/api/links';

  console.warn(Links);

  return LinkAsync;
};

class Info extends Component {
  render() {
    const links = this.props.links.map(
      link => this.makeLink(link)
    );

    return (
      <div>
        <h2>Learn Meteor!</h2>
        <ul>{ links }</ul>
      </div>
    );
  }

  makeLink(link) {
    const LinkAsync = getLinkAsync();
    return <LinkAsync link={link} />
  }
}

export default InfoContainer = withTracker(() => {
  import Links from 'imports/api/links';
  return {
    links: Links.find().fetch(),
  };
})(Info);
