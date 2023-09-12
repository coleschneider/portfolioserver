// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config('../.env');

import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import express from 'express';
import db from './db';
import { ApolloServer } from 'apollo-server-express';
import { PostResolver } from './graphql/resolvers/post';
import { seedDatabase } from './utils';

const app = express();

const port = process.env.PORT || 3000;

const main = async () => {
  try {
    await db.initialize();
    await seedDatabase();
    const schema = await buildSchema({
      resolvers: [PostResolver],
      validate: true,
    });
    const apolloServer = new ApolloServer({
      schema,
      introspection: true,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

main();
