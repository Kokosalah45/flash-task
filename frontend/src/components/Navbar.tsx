import { Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/checkout', label: 'Checkout' },
  { to: '/signin', label: 'Sign in' },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-5">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
