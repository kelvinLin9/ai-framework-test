import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <p className="text-2xl text-blue-500">home</p>
      <p>
        <Link to="/page1">Page1</Link>
      </p>
    </div>
  );
}
