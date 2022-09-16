import logo from './logo.svg';
import './App.css';
import NavRoutes from './NavRoutes'
import AppContext from './AppContext'

function App() {
  return (
    <div className="App">

      <AppContext.Provider
        value={{
          token: ""
        }}
      >
        <NavRoutes />
      </AppContext.Provider>

    </div >
  );
}

export default App;
