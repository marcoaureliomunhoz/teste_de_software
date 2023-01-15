import { publicApiService } from './PublicApiService';

describe('PublicApiService', () => {

  test('should return 2 entries', async () => {
    const entries = await publicApiService.getEntries();

    expect(entries).toHaveLength(2);
  });

});
