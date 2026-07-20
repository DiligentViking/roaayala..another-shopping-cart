import { Link, Outlet } from "react-router";
import Container from "../components/Container/Container";

function RootLayout() {
  return (
    <div>
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

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
