import { Route, Routes } from 'react-router-dom';
import CustomersList from './pages/customersList';
import NewCustomer from './pages/newCustomer';
import Header from './components/header';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CustomersList />} />
        <Route path="/customers" element={<NewCustomer />} />
      </Routes>
    </>
  );
}

export default App;
