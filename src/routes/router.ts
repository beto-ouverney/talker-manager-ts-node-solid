import { Router } from 'express';
import { getAllTalkersRoute } from './GetAllTalkers.routes';

const router = Router();

router.use(getAllTalkersRoute);

export { router };
