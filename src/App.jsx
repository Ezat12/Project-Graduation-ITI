import { Route, Routes, useLocation } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Details from "./pages/Details";
import TvShows from "./pages/TvShows";

function App() {
  const location = useLocation();
  const isDetailsPage =
    location.pathname.includes("/movie/") || location.pathname.includes("/tv/");

  return (
    <>
      {!isDetailsPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/tv/:id" element={<Details />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
