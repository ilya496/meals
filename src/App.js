import "./App.css";
import { useContext, useEffect } from "react";
import { auth } from "./firebase";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ReactPaginate from "react-paginate";
import { mealsContext } from "./context";
import Login from "./pages/Login";

function App() {
    const { setCurrentPage, pageCount, setCurrentUser, mealsToShow } =
        useContext(mealsContext);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            setCurrentUser(authUser);
        });
    });

    function handlePageClick({ selected }) {
        setCurrentPage(selected);
    }

    return (
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route path="/" exact>
                        <Home meals={mealsToShow} />
                        <ReactPaginate
                            previousLabel={"previous"}
                            nextLabel={"next"}
                            containerClassName={"pagination"}
                            previousLinkClassName={"previous-link"}
                            nextLinkClassName={"next-link"}
                            pageLinkClassName={"pagination-page-link"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            activeClassName={"page-link-active"}
                            disabledClassName={"page-link-disabled"}
                        />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                    <Route path="/login" exact>
                        <Login></Login>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
