import { v4 as uuidv4 } from 'uuid';

class Menu {
  id: string;
  nameDish: string;
  description: string;
  ingredients: string;

  constructor() {
    this.id = uuidv4();
  }
}

export { Menu };
