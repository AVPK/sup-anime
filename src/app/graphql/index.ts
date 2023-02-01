import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const apolloClient = new ApolloClient({
    uri:"https://graphql.anilist.co/",
    cache: new InMemoryCache(),
})