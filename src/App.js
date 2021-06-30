import "./App.css";
import {useContext, useEffect } from "react";
import {auth} from './firebase'
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ReactPaginate from 'react-paginate'; 
import {MealsContext} from './Context'
import Login from "./pages/Login";
import Favorites from './pages/Favorites'; 
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";

function App() {

  const {setCurrentPage, pageCount, setCurrentUser, currentUser} = useContext(MealsContext)

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        setCurrentUser(authUser)
      } else {
        setCurrentUser(null)
      }
       
    })
  }, [])
  function handlePageClick({selected}){
    setCurrentPage(selected)
  }


  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
           {pageCount !== 0 &&  <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          containerClassName={"pagination"}
          previousLinkClassName={"previous-link"}
          pageLinkClassName={"pagination-page-link"}
          nextLinkClassName={"next-link"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'page-link-active'}
          disabledClassName={'page-link-disabled'}
        />
           }
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          {currentUser &&  <Route exact path="/:id/favorites">
            <Favorites />
          </Route>}
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
