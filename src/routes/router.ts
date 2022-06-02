import { Router } from 'express';
import { talkerRoutes } from './Talker.routes';

const router = Router();

router.use(talkerRoutes);

export { router };
