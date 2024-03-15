import { Container } from "react-bootstrap";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
         <Outlet/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
