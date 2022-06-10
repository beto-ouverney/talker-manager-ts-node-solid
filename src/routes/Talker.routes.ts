import { Router } from 'express';
import { createTalkerIntegration } from '../modules/talker/integrations/createTalkerIntegration';
import { deleteTalkerIntegration } from '../modules/talker/integrations/DeleteTalkerIntegration';
import { editTalkerIntegration } from '../modules/talker/integrations/EditTalkerIntegration';
import { getAllTalkersIntegration } from '../modules/talker/integrations/GetAllTalkerIntegration';
import { getTalkerByIdIntegration } from '../modules/talker/integrations/getTalkerByIdIntegration';
import { searchTalkerIntegration } from '../modules/talker/integrations/SearchTalkerIntegration';
import { talkerValidations } from '../modules/talker/middlewares/talkerValidations';
import { tokenValidations } from '../modules/talker/middlewares/tokenValidations';

const talkerRoutes = Router();

talkerRoutes.get(
  '/talker/search',
  tokenValidations,
  async (request, response) => {
    return await searchTalkerIntegration.handle(request, response);
  }
);

talkerRoutes.get('/talker', async (request, response) => {
  return await getAllTalkersIntegration.handle(request, response);
});

talkerRoutes.get('/talker/:id', async (request, response) => {
  return await getTalkerByIdIntegration.handle(request, response);
});

talkerRoutes.post(
  '/talker',
  tokenValidations,
  talkerValidations,
  async (request, response) => {
    return await createTalkerIntegration.handle(request, response);
  }
);

talkerRoutes.put(
  '/talker/:id',
  tokenValidations,
  talkerValidations,
  async (request, response) => {
    return await editTalkerIntegration.handle(request, response);
  }
);

talkerRoutes.delete(
  '/talker/:id',
  tokenValidations,
  async (request, response) => {
    return await deleteTalkerIntegration.handle(request, response);
  }
);

export { talkerRoutes };
