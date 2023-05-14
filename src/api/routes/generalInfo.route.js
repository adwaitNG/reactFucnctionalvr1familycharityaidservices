import {Router} from 'express'
import GeneralInfo from '../controllers/generalInfo.controller'

const router = new Router()

router.route('/add').post(GeneralInfo.add)
router.route('/fetchCategoriesKitsCount').get(GeneralInfo.fetchCategoriesKitsCount)
router.route('/fetchCategoriesKits').get(GeneralInfo.fetchCategoriesKits)
router.route('/fetchDonor').get(GeneralInfo.fetchDonor)
router.route('/fetchKits').get(GeneralInfo.fetchKits)
router.route('/fetchItems').get(GeneralInfo.fetchItems)
router.route('/fetchrequisitionitemsAidRecipients').get(GeneralInfo.fetchrequisitionitemsAidRecipients)





export default router