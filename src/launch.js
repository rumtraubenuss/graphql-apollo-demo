import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const Launch = ({ error, loading, launch}) => {
  if (error) return <p>ERROR</p>;
  if (loading) return <p>LOADING</p>;
  return <p>{launch.mission_name}</p>;
};

const query = gql`{
  launch @rest(type: "Launch", path: "launches/next") {
    mission_name
  }
}`;

export default () => (
  <Query {...{ query }}>
    {({ loading, error, data: { launch }}) => (
      <Launch {...{ loading, error, launch }}/>
    )}
  </Query>
);
