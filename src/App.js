import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./style.css";
import Archive from "./pages/Archive";

const App = () => {
  return (
    <main className="app">
      <Header />
      <h2 className="title">Habit Tracker</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </main>
  );
};

export default App;
