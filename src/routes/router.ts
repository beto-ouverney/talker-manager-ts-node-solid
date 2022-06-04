import { Router } from 'express';
import { talkerRoutes } from './Talker.routes';
import { userRoutes } from './User.routes';

const router = Router();

router.use(talkerRoutes);
router.use(userRoutes);

export { router };
