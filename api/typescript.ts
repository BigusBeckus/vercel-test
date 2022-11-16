export const config = {
  runtime: 'experimental-edge',
};

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  const name = req.query.name ?? 'Dave';
  res.status(200).send(`Hello ${name} from the TypeScript file.`);
};
