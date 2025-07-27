import { Link, Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <p className="text-2xl text-blue-500">home/page1</p>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
      <p>
        <Link to="/page1/details">Details</Link>
      </p>
      <Outlet />
    </div>
  );
}
