import express,{Router} from 'express'
import { userList,singleUser, createUser, deleteUser } from '../controllers/userController';


const router: Router = express.Router();

router.get('/users',userList)
router.get('/user/:id',singleUser)
router.delete('/delete/user/:id',deleteUser)
router.post('/create/user',createUser)

export default router