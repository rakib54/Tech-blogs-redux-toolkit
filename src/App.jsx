import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
// import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PageNotFound from "./components/PageNotFound";
// import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";

export default function App() {
  return (
    <>
      {/* <Navigation /> */}
      {/* <Navbar /> */}
      <Navbar2 />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
