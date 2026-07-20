import { Link } from "react-router";
import { Container } from "..";

function Navbar() {
  return (
    <nav>
      <Container>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"cart"}>Cart</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
