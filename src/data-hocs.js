import { graphql } from 'react-apollo';
import gql from "graphql-tag";

export const withRatesData = graphql(gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`, {
  props: ({ data: { error, loading, rates } }) => (
    { error, loading, rates }
  )
});

export const withSomeValueData = graphql(gql`
  {
    networkStatus @client {
      someValue
      test
    }
  }
`, {
  props: ({ data: { networkStatus: { someValue, test } } }) => (
    { someValue, test }
  ),
});

export const withUpdateNetworkStatus = graphql(gql`
  mutation updateNetworkStatus($someValue: Boolean) {
    updateNetworkStatus(someValue: $someValue) @client
  }`, {
  props: ({ mutate }) => ({
    updateNetworkStatus: someValue => mutate({ variables: { someValue } }),
  }),
});
