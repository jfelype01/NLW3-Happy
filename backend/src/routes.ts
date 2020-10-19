import { Router } from 'express';
import Orphanagescontroller from './controllers/OrphanagesController';
import multer from 'multer';
import uploadConfig from './config/uploads'
import OrphanageController from './controllers/OrphanagesController'

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', Orphanagescontroller.index);
routes.get('/orphanages/:id',Orphanagescontroller.show)
routes.post('/orphanages',upload.array('images'), (OrphanageController.create));

export default routes;