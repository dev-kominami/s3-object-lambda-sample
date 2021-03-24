import type { AWS } from '@serverless/typescript';

import s3objettest from '@functions/s3object';

const serverlessConfiguration: AWS = {
  service: 's3objectlmbda',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    lambdaHashingVersion: '20201221',
    region: 'ap-northeast-1',
  },
  // import the function via paths
  functions: { s3objettest },
};

module.exports = serverlessConfiguration;
