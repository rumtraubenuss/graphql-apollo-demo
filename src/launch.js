import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Launch = ({ loading, launch }) => (
  loading ? <div>Loading</div> : <div>{launch.mission_name}</div>
);

const query = gql`
  {
    launch @rest(type: "Launch", path: "launches/next") {
      mission_name
    }
  }
`;

export default () => (
  <Query {...{ query }}>
    {({ loading, data: { launch }}) => (
      <Launch {...{ launch, loading }}/>
    )}
  </Query>
);
