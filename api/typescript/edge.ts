import { geolocation, ipAddress } from '@vercel/edge';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(request: Request) {
  try {
    const parts = request.url.split('?');
    const params = parts ? parts[1] : undefined;
    const name =
      params
        ?.split('&')
        .find((param) => param.startsWith('name'))
        ?.split('=')[1] ?? 'Dave';

    return new Response(
      JSON.stringify({
        message: `Hello ${name} from the edge.`,
        // url: request.url,
        '@vercel/edge': {
          ipAddress: ipAddress(request),
          geolocation: geolocation(request),
        },
      }),
      {
        status: 200,
        statusText: 'Success',
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: {
          message: 'Internal Server error',
        },
      }),
      {
        status: 502,
      }
    );
  }
}
