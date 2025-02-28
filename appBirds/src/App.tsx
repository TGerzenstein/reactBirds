import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./Router";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
}
