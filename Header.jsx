import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">🛍️ ShopEasy</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart 🛒</Link>
      </nav>
    </header>
  );
}
