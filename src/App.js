import './css/style.css';
import Header from './components/Header';
import Promo from './components/Promo';
import Popular from './components/Popular';
import Cakes from './components/Cakes';
import Pastry from './components/Pastry';
import IceCream from './components/IceCream';

const CAKES_DATA = [
  {id: 1, name: "Сметанный торт", description: "описание сметанного торта", price: 200, type: "sour-cream"},
  {id: 2, name: "Шоколадный торт", description: "описание шоколадного торта", price: 300, type: "chocolate"},
  {id: 3, name: "Фруктовый торт", description: "описание фруктового торта", price: 250, type: "fruit"},
  {id: 4, name: "Ягодный торт", description: "описание ягодного торта", price: 270, type: "berry"}
]

const PASTRY_DATA = [
  {id: 1, name: "Бисквитное пирожное", description: "описание бисквитного пирожного", price: 100, type: "biscuit"},
  {id: 2, name: "Песочное пирожное", description: "описание песочного пирожного", price: 120, type: "shortbread"},
  {id: 3, name: "Слоёное пирожное", description: "описание слоёного пирожного", price: 150, type: "flaky"},
  {id: 4, name: "Заварное пирожное", description: "описание заварного пирожного", price: 80, type: "custard"}
]

function App() {
  return (
    <div className="app-wrapper">

      <Header />

      <Promo />

      <Popular cakes={CAKES_DATA} pastry={PASTRY_DATA} />

      <Cakes cakes={CAKES_DATA} />

      <Pastry pastry={PASTRY_DATA} />

      <IceCream />

    </div>
  );
}

export default App;
