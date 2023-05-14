import {Router} from 'express'
import Volunteer from '../controllers/volunteer.controller'

const router = new Router()

router.route('/signup').post(Volunteer.add)
router.route('/login').post(Volunteer.fetch)

export default router