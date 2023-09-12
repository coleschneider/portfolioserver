declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_URI: string;
    }
  }
}
declare global {
  namespace Express {
    interface User {
      id: string;
    }
  }
}
export {};
