import axios from 'axios';

describe('GET /flighttracker', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/flighttracker`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual(
      expect.objectContaining({
        success: true,
        data: expect.objectContaining({ aircraft: expect.any(Array) }),
      })
    );
  });
});
