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

export const withMutateSomeValue = graphql(gql`
  mutation updateSomeValue($someValue: Boolean) {
    updateSomeValue(someValue: $someValue) @client
  }`, {
  props: ({ mutate }) => ({
    updateSomeValue: someValue => mutate({ variables: { someValue } }),
  }),
});
