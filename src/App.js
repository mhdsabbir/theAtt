import './App.css';
import NavBar from './components/NavBar';
// imbr , imbrs , imbrr       équivalent de la ligne du dessous
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accueil from './pages/Accueil';
import Projets from './pages/Projets';
import Contact from './pages/Contact';



const routes = [
  { path:"/", name:"Accueil", Component: Accueil},
  { path:"/projets", name:"Projets", Component: Projets},
  { path:"/contact", name:"Contact", Component: Contact},
]


function App() {
  
  return (
    <Router>
      <main>
        <NavBar/>
            <Routes>
              {routes.map(({path, Component})=>(
                <Route key={path} exact path={path}>
                  {()=>(
                      <>
                        <Component/>
                      </>
                  )}
                </Route>
              ))}
          </Routes>
      </main>
    </Router>
  );
}

export default App;
