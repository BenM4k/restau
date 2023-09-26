import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import './index.scss';
import Loader from './Components/Loader/Loader';
import { NotFound } from './routes';

const Home = lazy(() => import('./routes').then((module) => ({ default: module.Home })));
const Contact = lazy(() => import('./routes').then((module) => ({ default: module.Contact })));
const Members = lazy(() => import('./routes').then((module) => ({ default: module.Members })));
const Orders = lazy(() => import('./routes').then((module) => ({ default: module.Orders })));
const Reservations = lazy(() => import('./routes').then((module) => ({ default: module.Reservations })));

const App = () => (
  <>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/reservation" element={<Reservations />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </>
);

export default App;
