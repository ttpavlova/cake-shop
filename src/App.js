import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/style.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Cart from './components/Cart';
import Footer from './components/Footer';

const CAKES_DATA = [
  {id: "cake1", name: "Сметанный торт", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: 200, type: "sour-cream", quantity: 0},
  {id: "cake2", name: "Шоколадный торт", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: 300, type: "chocolate", quantity: 0},
  {id: "cake3", name: "Фруктовый торт", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: 250, type: "fruit", quantity: 0},
  {id: "cake4", name: "Ягодный торт", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", price: 270, type: "berry", quantity: 0}
]

const PASTRY_DATA = [
  {id: "pastry1", name: "Бисквитное пирожное", description: "описание бисквитного пирожного", price: 100, type: "biscuit", quantity: 0, img: "promo.jpg"},
  {id: "pastry2", name: "Песочное пирожное", description: "описание песочного пирожного", price: 120, type: "shortbread", quantity: 0, img: "promo.jpg"},
  {id: "pastry3", name: "Наполеон", description: "описание слоёного пирожного", price: 150, type: "flaky", quantity: 0, img: "napoleon.webp"},
  {id: "pastry4", name: "Заварное пирожное", description: "описание заварного пирожного", price: 80, type: "custard", quantity: 0, img: "napoleon.webp"}
]

const ICECREAM_DATA = [
  {id: "ice-cream1", name: "Пломбир классический", description: "описание ...", price: 50, type: "plombir", quantity: 0},
  {id: "ice-cream2", name: "Пломбир клубничный", description: "описание ...", price: 50, type: "plombir", quantity: 0},
  {id: "ice-cream3", name: "Пломбир шоколадный", description: "описание ...", price: 50, type: "plombir", quantity: 0},
  {id: "ice-cream4", name: "Пломбир мятный", description: "описание ...", price: 50, type: "plombir", quantity: 0},
  {id: "ice-cream5", name: "Пломбир черничный", description: "описание ...", price: 50, type: "plombir", quantity: 0},
]

const DRINKS_DATA = [
  {id: "drink1", name: "Сок вишнёвый", description: "...", price: 30, type: "", quantity: 0},
  {id: "drink2", name: "Чай зелёный", description: "...", price: 60, type: "", quantity: 0},
  {id: "drink3", name: "Чай чёрный", description: "...", price: 70, type: "", quantity: 0},
  {id: "drink4", name: "Кофе Американо", description: "...", price: 80, type: "", quantity: 0},
]

const ALL_DATA = CAKES_DATA.concat(PASTRY_DATA, ICECREAM_DATA, DRINKS_DATA);

function App() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [items, setItems] = useState(ALL_DATA);
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
              iceCream={ICECREAM_DATA}
              drinks={DRINKS_DATA}
              allData={ALL_DATA}
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
              items={items}
              setItems={setItems}
              cartItemsCount={cartItemsCount}
              totalPrice={totalPrice}
            />}
          />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;