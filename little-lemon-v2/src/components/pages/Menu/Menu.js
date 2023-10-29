import React from 'react';
import './Menu.css';

const menuItems = [
  {
    name: 'Taco Fusion',
    description: 'A delicious fusion of Mexican and international flavors.',
    price: '$12.99',
  },
  {
    name: 'Enchilada Supreme',
    description: 'Cheese-filled enchiladas topped with savory sauce.',
    price: '$10.99',
  },
  {
    name: 'Guacamole Delight',
    description: 'Freshly made guacamole with crispy tortilla chips.',
    price: '$7.99',
  },
  {
    name: 'Mexican Pizza',
    description: 'A unique blend of Mexican and Italian cuisines.',
    price: '$14.99',
  },
];

const Menu = () => {
  return (
    <section className="container grid menu">
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
