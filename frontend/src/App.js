import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/home";
import Layout from "./components/pages/layout";
import GoogleMap from "./components/pages/googlemap";
import About from "./components/pages/about";
import Appointment from "./components/pages/appointment/appointment";
import News from "./components/pages/news";
import Team from "./components/pages/team";
import Empty from "./components/pages/empty";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="home" element={<HomePage/>} /> */}
            <Route path="about" element={<About />} />
            <Route path="google-map" element={<GoogleMap />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="news" element={<News />} />
            <Route path="team" element={<Team />} />
            <Route path="*" element={<Empty />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
