import { Menu } from '../entities/Menu';

interface ICreateMenuDTO {
  nameDish: string;
  description: string;
  ingredients: string;
}

class MenuRepository {
  private menu: Menu[];

  constructor() {
    this.menu = [];
  }

  create({ nameDish, description, ingredients }: ICreateMenuDTO): Menu {
    const dish = new Menu();

    Object.assign(dish, {
      nameDish,
      description,
      ingredients,
    });

    this.menu.push(dish);

    return dish;
  }
}

export { MenuRepository };
