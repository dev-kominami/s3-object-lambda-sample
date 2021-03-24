import 'source-map-support/register';

import { middyfy } from '@libs/lambda';

const s3objettest = async (event) => {
  console.log(JSON.stringify(event));
  return 'ok';
}

export const main = middyfy(s3objettest);
