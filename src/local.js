import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export const Local = ({ updateSomeValue, misc: { someValue } }) => (
  <div>
    <p>STATE data: {someValue ? 'TRUE' : 'FALSE'}</p>
    <p>
      <button onClick={() => updateSomeValue({ variables: { someValue: !someValue } })}>CLICK</button>
    </p>
  </div>
);

const query = gql`
  {
    misc @client {
      someValue
      test
    }
  }
`;

const mutation = gql`
  mutation updateSomeValue($someValue: Boolean) {
    updateSomeValue(someValue: $someValue) @client
  }
`;

export default () => (
  <Mutation mutation={mutation}>
    {updateSomeValue => (
      <Query query={query}>
        {({ data: { misc }, loading }) => (
          <Local {...{ misc, updateSomeValue }}/>
        )}
      </Query>
    )}
  </Mutation>
);
