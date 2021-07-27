import { ListAccessArgs } from './types';
// At it's simplist access control returns either a yes or no value depending on the users session

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}
