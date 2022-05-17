import './css/style.css';
import Header from './components/Header';
import Promo from './components/Promo';
import Popular from './components/Popular';
import Cakes from './components/Cakes';

function App() {
  return (
    <div className="app-wrapper">

      <Header />

      <Promo />

      <Popular />

      <Cakes />

    </div>
  );
}

export default App;
