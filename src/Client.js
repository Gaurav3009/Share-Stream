import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/gaurav3009/sharestream',
    fetchOptions: {
      mode: 'cors'
    }
  }),
  cache: new InMemoryCache(),
});

export default client;

//import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// const httpLink = new HttpLink({
//     uri: 'https://api.thegraph.com/subgraphs/name/gaurav3009/sharestream',
//     fetchOptions: {
//       mode: 'cors'
//     }
//   });

//const client = new ApolloClient({
//uri: new HttpLink({
    //uri: 'https://api.thegraph.com/subgraphs/name/gaurav3009/sharestream',
   // fetchOptions: {
   //   mode: 'cors'
  //  }}),
//cache: new InMemoryCache(),

//});

//export default client;