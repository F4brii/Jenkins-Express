const { Router } = require("express");
const repository = require('../repositories/person.repository');
const router = Router();

router.get('/', repository.findAll);
router.get('/:dni', repository.findbyDni);
router.post('/', repository.savePerson);

module.exports = router;