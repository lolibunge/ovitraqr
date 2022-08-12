import { buildConfig } from 'payload/config';
import Animals from './collections/Animals';
import Users from './collections/Users';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    Animals
  ],
});
