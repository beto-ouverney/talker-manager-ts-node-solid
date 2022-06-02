import { Router } from 'express';
import { getAllTalkersImplementation } from '../modules/talker/implementations/GetAllTalkerImplementation';

const getAllTalkersRoute = Router();

getAllTalkersRoute.get('/talker', async (request, response) => {
  return await getAllTalkersImplementation.handle(request, response);
});

export { getAllTalkersRoute };
