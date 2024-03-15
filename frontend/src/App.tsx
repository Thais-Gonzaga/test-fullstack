import { Route, Routes } from 'react-router-dom';
import CustumersList from './pages/custumersList';
function App() {
  return (
    <Routes>
      <Route path="/" element={ <CustumersList/> } />
    </Routes>

  );
}

export default App;
