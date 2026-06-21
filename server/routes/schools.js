import { Router } from 'express';
import { SCHOOLS_DETAIL } from '../data/partyHistoryKnowledge.js';

const router = Router();

router.get('/', (req, res) => {
  const schools = Object.values(SCHOOLS_DETAIL);
  res.json({ schools });
});

export default router;
