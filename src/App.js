
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index path='/home' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
  </Route>
))


function App() {
  return (
    <>
    <RouterProvider router={routes} />
    </>
    
  );
}

export default App;
