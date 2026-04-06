// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import BodyPage from './components/BodyPage';
import Pricing from './components/Pricing';
import Workingsection from './components/Workingsection';

function App() {
  return (
       <>
      <section className="landing-section">
        <Landing />
      </section>

      <section className="body-section">
        <BodyPage />
      </section>

      <section className="pricing-section">
        <Pricing />
      </section>

      <section className="working-section">
        <Workingsection />
      </section>

    </>

  );
}

export default App;
