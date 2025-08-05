import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
