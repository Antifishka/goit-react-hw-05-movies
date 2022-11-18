import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "../pages/Home/Home";
import { Movies } from "../pages/Movies/Movies";
import { MovieDetails } from "../pages/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
  return (  
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>  
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={2500} theme="colored"/>
    </>  
  );
};
