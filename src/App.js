
import './scss/main.scss';

import { BrowserRouter } from "react-router-dom";

import Router from "./components/Router";
import Layout from './components/Layout';
import SocketProvider from "./contexts/SocketContext";
import AppProvider from "./contexts/AppContext";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <SocketProvider>
            <Layout>
              <Router />
            </Layout>
          </SocketProvider>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
