export const nodeEnvironment = process.env.NODE_ENV;

export const backendUrl =
  nodeEnvironment === "development"
    ? process.env.DEVELOPMENT_BACKEND_URL
    : process.env.PRODUCTION_BACKEND_URL;
