
import './scss/main.scss';

import { BrowserRouter } from "react-router-dom";

import Router from "./components/Router";
import SocketProvider from "./contexts/SocketContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SocketProvider>
          <Router />
        </SocketProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
