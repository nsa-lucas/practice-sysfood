import { Router } from 'express';
import { MenuRepository } from '../repositories/MenuRepository';

const menuRoutes = Router();

const menuRepository = new MenuRepository();

menuRoutes.post('/', (request, response) => {
  const { nameDish, description, ingredients } = request.body;

  const dish = menuRepository.create({ nameDish, description, ingredients });

  return response.status(201).json({ dish });
});

export { menuRoutes };
