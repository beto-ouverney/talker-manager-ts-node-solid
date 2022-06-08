import { Router } from 'express';
import { userAutorizationImplementation } from '../modules/user/implementions/UserAutorizationImplementations';
import { userValidation } from '../modules/user/middlewares/userValidation';

const userRoutes = Router();
userRoutes.post('/login', userValidation, (request, response) => {
  return userAutorizationImplementation.handle(request, response);
});

export { userRoutes };
