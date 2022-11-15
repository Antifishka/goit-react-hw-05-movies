import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "../pages/MovieDetails";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";
import { Container, Header, Link } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">About</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
