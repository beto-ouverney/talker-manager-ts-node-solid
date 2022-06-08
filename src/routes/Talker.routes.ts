import { Router } from 'express';
import { createTalkerImplementation } from '../modules/talker/implementations/CreateTalkerImplementation';
import { deleteTalkerImplementation } from '../modules/talker/implementations/DeleteTalkerImplementation';
import { editTalkerImplementation } from '../modules/talker/implementations/EditTalkerImplementation';
import { getAllTalkersImplementation } from '../modules/talker/implementations/GetAllTalkerImplementation';
import { getTalkerByIdImplementation } from '../modules/talker/implementations/GetTalkerByIdImplementation';
import { searchTalkerImplementation } from '../modules/talker/implementations/SearchTalkerImplementation';
import { talkerValidations } from '../modules/talker/middlewares/talkerValidations';
import { tokenValidations } from '../modules/talker/middlewares/tokenValidations';

const talkerRoutes = Router();

talkerRoutes.get(
  '/talker/search',
  tokenValidations,
  async (request, response) => {
    return await searchTalkerImplementation.handle(request, response);
  }
);

talkerRoutes.get('/talker', async (request, response) => {
  return await getAllTalkersImplementation.handle(request, response);
});

talkerRoutes.get('/talker/:id', async (request, response) => {
  return await getTalkerByIdImplementation.handle(request, response);
});

talkerRoutes.post(
  '/talker',
  tokenValidations,
  talkerValidations,
  async (request, response) => {
    return await createTalkerImplementation.handle(request, response);
  }
);

talkerRoutes.put(
  '/talker/:id',
  tokenValidations,
  talkerValidations,
  async (request, response) => {
    return await editTalkerImplementation.handle(request, response);
  }
);

talkerRoutes.delete(
  '/talker/:id',
  tokenValidations,
  async (request, response) => {
    return await deleteTalkerImplementation.handle(request, response);
  }
);

export { talkerRoutes };
