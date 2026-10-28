import { api, ApiError } from './api.js';

afterEach(() => vi.restoreAllMocks());

describe('api', () => {
  it('returns parsed JSON for successful responses', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), { status: 200 }),
    );
    await expect(api('/items')).resolves.toEqual({ ok: true });
  });

  it('throws ApiError with the status for failed responses', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('nope', { status: 404 }));
    await expect(api('/missing')).rejects.toMatchObject({ name: 'ApiError', status: 404 });
    await expect(api('/missing')).rejects.toBeInstanceOf(ApiError);
  });
});
