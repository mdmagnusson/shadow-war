import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Member from 'components/member';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <Member
          name="Captain Glory"
          rank="leader"
        />
        <Member
          name="Roboflargan"
          rank="soldier"
          outOfAction
        />
        <Member
          name="John Smith"
          rank="soldier"
        />
        <Member
          name="Steve Bannon"
          rank="soldier"
        />
        <Member
          name="Max Dickerson"
          rank="soldier"
        />
        <Member
          name="Turd Fergusson"
          rank="soldier"
        />
        <Member
          name="Argan Flargan"
          rank="heavy"
        />
      </div>
    );
  }
}
