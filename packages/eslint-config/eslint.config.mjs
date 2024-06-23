import config from './src/index.mjs';

export default {
  ...config,
  // Additional settings for the eslint-config project itself
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  // Any other settings specific to your eslint-config project
};
