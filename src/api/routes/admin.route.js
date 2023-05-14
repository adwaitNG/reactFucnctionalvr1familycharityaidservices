import {Router} from 'express'
import Admin from '../controllers/admin.controller'

const router = new Router()

router.route('/signup').post(Admin.add)
router.route('/login').post(Admin.fetch)

export default router