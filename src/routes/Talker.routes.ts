import { Router } from 'express';
import { createTalkerImplementation } from '../modules/talker/implementations/CreateTalkerImplementation';
import { getAllTalkersImplementation } from '../modules/talker/implementations/GetAllTalkerImplementation';
import { getTalkerByIdImplementation } from '../modules/talker/implementations/GetTalkerByIdImplementation';

const talkerRoutes = Router();

talkerRoutes.get('/talker', async (request, response) => {
  return await getAllTalkersImplementation.handle(request, response);
});

talkerRoutes.get('/talker/:id', async (request, response) => {
  return await getTalkerByIdImplementation.handle(request, response);
});

talkerRoutes.post('/talker', async (request, response) => {
  return await createTalkerImplementation.handle(request, response);
});

export { talkerRoutes };
