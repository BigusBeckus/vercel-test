import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const name = request.query?.name ?? 'Dave';
  return response.status(200).send(`Hello ${name} from the TypeScript file.`);
}
