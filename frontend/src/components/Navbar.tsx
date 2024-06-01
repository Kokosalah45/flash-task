import { Link } from 'react-router-dom';

const defaultLinks = [
  { to: '/', label: 'Home' },
  { to: '/checkout', label: 'Checkout' },
  { to: '/signin', label: 'Sign in' },
];

type Link = {
  to: string;
  label: string;
};

const Navbar = ({ links = defaultLinks }: { links?: Link[] }) => {
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
