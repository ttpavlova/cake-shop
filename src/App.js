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
  {id: "cake1", name: "Сметанный торт с ягодами", description: "Ванильный бисквит, сметанный крем, ягоды черники и ежевики", price: 200, type: "sour-cream", quantity: 0, img: "sour-cream-cake.jpg"},
  {id: "cake2", name: "Торт «Прага»", description: "Шоколадный бисквит, шоколадный масляный крем, яблочное повидло", price: 300, type: "chocolate", quantity: 0, img: "prague-cake.jpg"},
  {id: "cake3", name: "Торт «Чёрный лес»", description: "Шоколадный бисквит, вишнёвая начинка, свежие ягоды вишни, шоколадная глазурь", price: 250, type: "chocolate", quantity: 0, img: "black-forest-cake.jpg"},
  {id: "cake4", name: "Торт с ежевикой", description: "Ванильный бисквит, сливочный крем, молочная глазурь, ягоды ежевики", price: 270, type: "berry", quantity: 0, img: "berry-cake.jpg"},
  {id: "cake5", name: "Торт «Красный Бархат»", description: "Шоколадный бисквит, крем на основе сливочного сыра", price: 270, type: "chocolate", quantity: 0, img: "red-velvet-cake.jpg"},
  {id: "cake6", name: "Сметанный торт с ягодным ассорти", description: "Ванильный бисквит, сметанный крем, ягоды черники, малины и клубники", price: 270, type: "sour-cream", quantity: 0, img: "sour-cream-cake-strawberries.jpg"},
  {id: "cake7", name: "Клубничный торт", description: "Песочная основа, белый бисквит, компоте из ягод, свежие ягоды клубники", price: 270, type: "berry", quantity: 0, img: "strawberry-cake.jpg"},
  {id: "cake8", name: "Апельсиновый торт", description: "Белый бисквит, фруктовое желе, абрикосовое суфле, дольки апельсина", price: 250, type: "fruit", quantity: 0, img: "orange-cake.jpg"},
]

const PASTRY_DATA = [
  {id: "pastry1", name: "Пирожное «Ламингтон»", description: "Бисквит, шоколадная глазурь, кокосовые стружки", price: 100, type: "biscuit", quantity: 0, img: "lamington.jpg"},
  {id: "pastry2", name: "Корзиночка с ягодами", description: "Песочная основа, повидло, ягоды черники, малины и ежевики", price: 120, type: "shortbread", quantity: 0, img: "berry-basket-cake.jpg"},
  {id: "pastry3", name: "Пирожное «Наполеон»", description: "Слоёные коржи, сливочно-заварной крем", price: 150, type: "flaky", quantity: 0, img: "napoleon-cake.jpg"},
  {id: "pastry4", name: "Профитроли с заварным кремом", description: "Заварное тесто, заварной крем", price: 80, type: "custard", quantity: 0, img: "profitroles.jpg"}
]

const ICECREAM_DATA = [
  {id: "ice-cream1", name: "Пломбир классический", description: "Мороженое с классическим ванильным вкусом", price: 50, type: "plombir", quantity: 0, img: "plombir-classic.jpg"},
  {id: "ice-cream2", name: "Пломбир клубничный", description: "описание ...", price: 50, type: "plombir", quantity: 0, img: "plombir-strawberry.jpg"},
  {id: "ice-cream3", name: "Пломбир шоколадный", description: "описание ...", price: 50, type: "plombir", quantity: 0, img: "plombir-chocolate.jpg"},
  {id: "ice-cream4", name: "Фисташковый пломбир", description: "Мороженое с добавлением фисташек", price: 50, type: "plombir", quantity: 0, img: "plombir-pistachio.jpg"},
  {id: "ice-cream5", name: "Пломбир черничный", description: "Мороженое с ягодами черники и кусочками кешью", price: 50, type: "plombir", quantity: 0, img: "plombir-blueberry.jpg"},
]

const DRINKS_DATA = [
  {id: "drink1", name: "Сок апельсиновый", description: "...", price: 30, type: "", quantity: 0, img: "orange-juice.jpg"},
  {id: "drink2", name: "Чай зелёный", description: "...", price: 60, type: "", quantity: 0, img: "green-tea.jpg"},
  {id: "drink3", name: "Чай чёрный", description: "...", price: 70, type: "", quantity: 0, img: "black-tea.jpg"},
  {id: "drink4", name: "Кофе Американо", description: "...", price: 80, type: "", quantity: 0, img: "coffee-americano.jpg"},
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