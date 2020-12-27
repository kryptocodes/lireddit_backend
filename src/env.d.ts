declare namespace NodeJS {
  export interface ProcessEnv {
    USER_NAME : string;
    PASSWORD : string;
    DATABASE_URL: string;
    REDIS_URL: string;
    PORT: string;
    SESSION_SECRET: string;
    CORS_ORIGIN: string;
  }
}
