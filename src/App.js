import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/style.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Cart from './components/Cart';

const CAKES_DATA = [
  {id: "cake1", name: "Сметанный торт", description: "описание сметанного торта", price: 200, type: "sour-cream", quantity: 0},
  {id: "cake2", name: "Шоколадный торт", description: "описание шоколадного торта", price: 300, type: "chocolate", quantity: 0},
  {id: "cake3", name: "Фруктовый торт", description: "описание фруктового торта", price: 250, type: "fruit", quantity: 0},
  {id: "cake4", name: "Ягодный торт", description: "описание ягодного торта", price: 270, type: "berry", quantity: 0}
]

const PASTRY_DATA = [
  {id: "pastry1", name: "Бисквитное пирожное", description: "описание бисквитного пирожного", price: 100, type: "biscuit"},
  {id: "pastry2", name: "Песочное пирожное", description: "описание песочного пирожного", price: 120, type: "shortbread"},
  {id: "pastry3", name: "Слоёное пирожное", description: "описание слоёного пирожного", price: 150, type: "flaky"},
  {id: "pastry4", name: "Заварное пирожное", description: "описание заварного пирожного", price: 80, type: "custard"}
]

function App() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [items, setItems] = useState(CAKES_DATA);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function addToCart(id) {
    const updatedItems = items.map(item => {
        if (id === item.id) {
            return {...item, quantity: item.quantity + 1};
        }
        return item;
    });

    setItems(updatedItems);
  }

  useEffect(() => {
    calculateTotal();
    calculateTotalPrice();
  })

  function calculateTotal() {
    const cartItemsCount = items.reduce((previousValue, item) => {
      return previousValue + item.quantity;
    }, 0);

    setCartItemsCount(cartItemsCount);
  }

  function calculateTotalPrice() {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      let price = items[i].price * items[i].quantity;
      sum = sum + price;
    }
    
    setTotalPrice(sum);
  }

  return (
    <BrowserRouter>
      <Header
        cartItemsCount={cartItemsCount}
        isMenuOpened={isMenuOpened}
        setMenuOpened={setMenuOpened}
      />
        <Routes>
          <Route path="/" element={
            <Home
              cakes={CAKES_DATA}
              pastry={PASTRY_DATA}
              items={items}
              onClick={(id) => addToCart(id)}
              setItems={setItems}
              cartItemsCount={cartItemsCount}
            />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={
            <Cart
              cakes={CAKES_DATA}
              items={items}
              setItems={setItems}
              cartItemsCount={cartItemsCount}
              totalPrice={totalPrice}
            />}
          />
        </Routes>
    </BrowserRouter>
  );
}

export default App;