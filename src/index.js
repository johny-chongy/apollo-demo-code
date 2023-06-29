import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import apollo dependencies
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const BASE_GRAPHQL_URL = "https://users-messages-gql.herokuapp.com/graphql"

const client = new ApolloClient({
  uri: BASE_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

client
  .query({
   query: gql`
      query User {
        users {
          username
          first_name
          last_name
          messages {
            id
            body
          }
        }
      }`,
})
.then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
