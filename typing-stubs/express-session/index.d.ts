import session from 'express-session';

declare module 'express-session' {
  export interface Session {
    user: string;
    isAuth:Boolean,
  }
}