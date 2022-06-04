import { Router } from 'express';
import { userAutorizationImplementation } from '../modules/user/implementions/UserAutorizationImplementations';

const userRoutes = Router();

userRoutes.post('/login', (request, response) => {
  return userAutorizationImplementation.handle(request, response);
});

export { userRoutes };
