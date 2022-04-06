export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  
}

export const products = [
  {
    id: 1,
    name: 'Menu 1',
    price: 7 , 
    description: 'Ingredientes para realizar las recetas descritas en el Menu 1 de nuestra pagina de menus',
    picture: 'menu1.jpg'
  },
  {
    id: 2,
    name: 'Menu 2',
    price: 6.50,
    description:  'Ingredientes para realizar las recetas descritas en el Menu 2 de nuestra pagina de menus',
    picture: 'menu2.jpg'
  },
  {
    id: 3,
    name: 'Menu 3',
    price: 8.20,
    description: 'Ingredientes para realizar las recetas descritas en el Menu 3 de nuestra pagina de menus',
    picture: 'menu3.jpg'
    
  },

  { id: 4,
    name: 'Arroz 500g',
    price: 8.20,
    description: 'Delicioso Arroz especial para coccion',
    picture: 'arroz.jpg'
  },
  { id: 5,
    name: '1kg Filete de Ternera',
    price: 3.50,
    description: 'Delicisioso Filetes especiales para Plancha',
    picture: 'filete.jpg'
  },
  { id: 6,
    name: 'Pollo',
    price: 3.50,
    description: 'Pollo entero 1kg',
    picture: 'pollo.jpg'
  },

  { id: 7,
    name: 'Muslos de Pollos',
    price: 4.05,
    description: '1 kg de Muslos de Pollo',
    picture: 'muslospollo.jpg'
  },
  { id: 8,
    name: 'Barra de Pan',
    price: 0.50,
    description: '1 barra de pan rustica',
    picture: 'barrapan.jpg'
  },
  { id: 9,
    name: 'Merluza',
    price: 9.00,
    description: '1 merluza',
    picture: 'merluza.jpg'
  },
];


