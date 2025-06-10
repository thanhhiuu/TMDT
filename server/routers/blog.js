import Express from 'express';
import {
  create,
  update,
  getBlog,
  deletes,
  likes,
  uploadImageBlog,
  getAll,
} from '../controllers/blog.js';
import { isAdmin, verifyToken } from '../middlewares/verifyToken.js';
import uploadIcloud from '../middlewares/uploadCloud.js';
const router = Express.Router();

router.post('/create', [verifyToken, isAdmin], create);
router.get('/getall', [verifyToken, isAdmin], getAll);
router.get('/current/:bid', [verifyToken, isAdmin], getBlog);
router.put('/update/:bid', [verifyToken, isAdmin], update);
router.delete('/delete', [verifyToken, isAdmin], deletes);
router.put('/likes/:bid', [verifyToken, isAdmin], likes);
router.put(
  '/upload/:bid',
  [verifyToken, isAdmin],
  uploadIcloud.single('image'),
  uploadImageBlog
);

export default router;
