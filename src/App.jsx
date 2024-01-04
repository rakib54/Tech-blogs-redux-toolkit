import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import PageNotFound from "./components/ui/PageNotFound.jsx";
import "./main.css";
import PostDetails from "./components/post/PostDetails.jsx";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:blogId" element={<PostDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
