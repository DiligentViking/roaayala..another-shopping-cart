import { Outlet } from "react-router";
import { Navbar } from "../components";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
