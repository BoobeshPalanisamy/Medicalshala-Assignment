import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Navbar/Layout";
import Home from "./Home/Home";
import BlogsPage from "./OtherPages.jsx/BlogsPage";
import ABHA from "./OtherPages.jsx/ABHA";
import BuyNowPayLater from "./OtherPages.jsx/BuyNowPayLater";
import AboutUsPage from "./OtherPages.jsx/AboutUsPage";
import StartNowPage from "./OtherPages.jsx/StartNowPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/blogs" element={<BlogsPage />}></Route>
            <Route path="/abha" element={<ABHA />}></Route>
            <Route path="/buynowpaylater" element={<BuyNowPayLater />}></Route>
            <Route path="/aboutus" element={<AboutUsPage />}></Route>
            <Route path="/startnow" element={<StartNowPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
