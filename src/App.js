import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/style.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { CAKES_DATA, PASTRY_DATA, ICECREAM_DATA, DRINKS_DATA, ALL_DATA } from './data';

function App() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [items, setItems] = useState(getArrayToLoadDataFrom());
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // if there is any data in local storage, we load it from it, otherwise the original data is loaded
  function getArrayToLoadDataFrom() {
    const localData = localStorage.getItem("items");
    if (localData) {
      return JSON.parse(localData);
    }
    return ALL_DATA;
  }

  // update local storage every time the data is changed
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function addToCart(id) {
    const updatedItems = items.map(item => {
        if (id === item.id) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
    });

    setItems(updatedItems);
  }

  function deleteFromCart(id) {
    const updatedItems = items.map(item => {
      if (id === item.id) {
        return {...item, quantity: item.quantity = 0};
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

  function countDessertOfTheDayPrice(id, price) {
    let discount = 0.1;
    if (id === dessertOfTheDayId) {
        return price * (1 - discount);
    }
    return price;
  }

  function calculateTotalPrice() {
    let sum = 0;
    let price = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === dessertOfTheDayId) {
        price = countDessertOfTheDayPrice(items[i].id, items[i].price) * items[i].quantity;
      }
      else {
        price = items[i].price * items[i].quantity;
      }
      sum = sum + price;
    }
    
    setTotalPrice(sum);
  }

  function getDayName() {
    let date = new Date();
    let options = { weekday: "long"};

    let dayName = new Intl.DateTimeFormat("ru-RU", options).format(date);

    return dayName;
  }

  function defineDessertOfTheDay(dayName) {
    let dessertId = "";

    switch(dayName) {
      case "понедельник":
        dessertId = "pastry1";
        break;
      case "вторник":
        dessertId = "pastry3";
        break;
      case "среда":
        dessertId = "cake6";
        break;
      case "четверг":
        dessertId = "cake3";
        break;
      case "пятница":
        dessertId = "cake7";
        break;
      case "суббота":
        dessertId = "pastry2";
        break;
      case "воскресенье":
        dessertId = "cake8";
        break;
      default:
        dessertId = "cake6";
    }

    return dessertId;
  }

  const dessertOfTheDayId = defineDessertOfTheDay(getDayName());

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header
        cartItemsCount={cartItemsCount}
        isMenuOpened={isMenuOpened}
        setMenuOpened={setMenuOpened}
      />
        <Routes>
          <Route path="/" element={
            <Home
              dessertOfTheDayId={dessertOfTheDayId}
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
              dessertOfTheDayId={dessertOfTheDayId}
              items={items}
              deleteFromCart={(id) => deleteFromCart(id)}
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