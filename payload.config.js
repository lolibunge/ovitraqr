import { buildConfig } from 'payload/config';
import Animals from './collections/Animals';
import Users from './collections/Users';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    Animals
  ],
});
