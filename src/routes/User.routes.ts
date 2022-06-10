import { Router } from 'express';
import { userAutorizationIntegration } from '../modules/user/integrations/UserAutorizationIntegration';
import { userValidation } from '../modules/user/middlewares/userValidation';

const userRoutes = Router();
userRoutes.post('/login', userValidation, (request, response) => {
  return userAutorizationIntegration.handle(request, response);
});

export { userRoutes };
