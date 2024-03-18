import { Route, Routes } from 'react-router-dom';
import CustomersList from './pages/customersList';
import Header from './components/header';
import Customer from './pages/customer';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CustomersList />} />
        <Route path="/customers" element={<Customer />} />
      </Routes>
    </>
  );
}

export default App;
