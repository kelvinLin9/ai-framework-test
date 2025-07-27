import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import Page1 from './pages/page-1';
import Details from './components/page1-details';

export function App() {
  return (
    <div>
      {/* <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />}>
          <Route path="details" element={<Details />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p className="text-2xl text-red-500">Page not found.</p>
              <Link to="/">Go back to Home</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
