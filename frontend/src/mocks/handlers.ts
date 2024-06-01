import { HttpResponse, http } from 'msw';

const BASE_URL = 'http://localhost:3000/api';
export const handlers = [
  http.post(`${BASE_URL}/auth/signin`, () => {
    return HttpResponse.json({
      userData: {
        id: 1,
        email: 'test@gmail.com',
        phone_number: '1234567890',
        name: 'Test',
      },
    });
  }),
];
