import { Router } from 'express';
import { createTalkerImplementation } from '../modules/talker/implementations/CreateTalkerImplementation';
import { deleteTalkerImplementation } from '../modules/talker/implementations/DeleteTalkerImplementation';
import { editTalkerImplementation } from '../modules/talker/implementations/EditTalkerImplementation';
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

talkerRoutes.put('/talker/:id', async (request, response) => {
  return await editTalkerImplementation.handle(request, response);
});

talkerRoutes.delete('/talker/:id', async (request, response) => {
  return await deleteTalkerImplementation.handle(request, response);
});

export { talkerRoutes };
