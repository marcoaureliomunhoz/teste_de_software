import { rest } from 'msw';
import { environments } from '../environments';

function getEntries() {
  return rest.get(`${environments.PUBLIC_API_URL}/entries`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 2,
        entries: [
          {
            API: 'api1',
            Description: 'api1',
            Link: 'api1',
            Category: 'api'
          },
          {
            API: 'api2',
            Description: 'api2',
            Link: 'api2',
            Category: 'api'
          },
        ]
      })
    );
  });
}

export const handlers = [
  getEntries()
];
