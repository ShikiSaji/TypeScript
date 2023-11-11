import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
# Comments inside back-ticks start with # instead of //
type Book {
    title: String
    author: String
}

type Song {
    title: String
    artist: String
}

type Query {
    books: [Book]
    songs: [Song]
}
`;

const books = [
  {
    title: 'متن العشماوية',
    author: 'عبد الباري العشماوي',
  },
  {
    title: 'التحرير والتنوير',
    author: 'شيخ الإسلام طاهر بن عاشور',
  },
];

const songs = [
    {
        title: "Beatiful World",
        artist: "Hikaru Utada"
    },
    {
        artist: "Ayumi Hamasaki",
        title: "Seasons"
    },
    {
        artist: "Vaundy",
        title: "Chainsaw Blood"
    }
]

const resolvers = {
    Query: {
        books: () => books,
        songs: () => songs
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000},
});

console.log(`🚀 Server ready at ${url}`)
