import { Route, Routes } from 'react-router-dom';
import CustomersList from './pages/customersList';
import Header from './components/header';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CustomersList />} />
      </Routes>
    </>
  );
}

export default App;
