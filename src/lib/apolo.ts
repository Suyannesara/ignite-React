import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qb4snd3xj401w7f4oc7isf/master',
    cache: new InMemoryCache()
})