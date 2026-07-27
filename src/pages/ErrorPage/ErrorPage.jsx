import { Link } from "react-router";
import { Container } from "../../components";

function ErrorPage() {
  return (
    <Container>
      <h2>Page Not Found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
        perferendis ullam necessitatibus soluta enim illo voluptas aliquid sunt
        iusto dicta.
      </p>

      <Link to="/">Back to Home</Link>
    </Container>
  );
}

export default ErrorPage;
