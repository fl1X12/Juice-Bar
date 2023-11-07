import React from 'react';
import { useState,useEffect } from 'react';

const Menu = () => {
  const [menuItems,setMenuItems] = useState([
    {
      category: 'REFRESHERS',
      items: [
        { name: 'Fresh Berry Lemonade', cost: 40,id:1,count:0 },
        { name: 'Cranberry-Basil Spritzer', cost: 50,id:2,count:0 },
        { name: 'Icy Watermelon Granita', cost: 40,id:3,count:0 },
        { name: 'Lemon Punch', cost: 40,id:4,count:0 },

        // Add more smoothie items as needed
      ],
    },
    {
      category: 'SMOOTHIES',
      items: [
        { name: 'Mint Chocolate Chip', cost: 100,id:5,count:0 },
        { name: 'Pina Colada Oat', cost: 150,id:6,count:0 },
        { name: 'Energizing Almond Joy', cost: 130,id:7,count:0 },
        { name: 'Matcha Mango', cost: 120,id:8,count:0 },
        // Add more fresh juice items as needed
      ],
    },
    {
      category: "MOJITO'S",
      items: [
        { name: 'Coconut Mojito Pitcher', cost: 99,id:9,count:0 },
        { name: 'Vodka Blueberry Mojito', cost: 180,id:10,count:0 },
        { name: 'Prairie Cucumber Mojito', cost: 110,id:11,count:0 },
        { name: 'Cocojito', cost: 200,id:12,count:0 },
        // Add more milkshake items as needed
      ],
    },
    {
      category: "BEST SELLER'S",
      items: [
        { name: 'Minty Mind', cost: 80,id:13,count:0 },
        { name: 'Shine On', cost: 90,id:14,count:0 },
        { name: 'Xtra Explosion', cost: 200,id:15,count:0 },
        { name: 'Chocolate Cheat', cost: 180,id:16,count:0 },
      
        // Add more specialty drink items as needed
      ],
    },
  ]);

  const inc = (categoryId, itemId) => {
    const updatedItems = menuItems.map((category) => {
      if (category.category === categoryId) {
        const updatedItems = category.items.map((item) => {
          if (item.id === itemId) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        return { ...category, items: updatedItems };
      }
      return category;
    });
    setMenuItems(updatedItems);
  };


  const dec = (categoryId, itemId) => {
    const updatedItems = menuItems.map((category) => {
      if (category.category === categoryId) {
        const updatedItems = category.items.map((item) => {
          if (item.id === itemId && item.count > 0) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        });
        return { ...category, items: updatedItems };
      }
      return category;
    });
    setMenuItems(updatedItems);
  };

  useEffect(()=>{
    console.log(menuItems);
  })
  return (
    <div className="menu" id ="menu">
      {menuItems.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <ul>
            {category.items.map((item, i) => (
              <p key={i}>
                {item.name} - Rs{item.cost}
                <button className="menu-button" onClick={()=>{inc(category.category,item.id)}}>+</button>
                <button className='menu-button' onClick={()=>{dec(category.category,item.id)}}>-</button>
                </p>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;