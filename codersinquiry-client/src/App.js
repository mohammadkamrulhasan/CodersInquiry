import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import RegistrationForm from './components/Login/RegistrationForm';
import Blog from './components/Blog/Blog';
import TopLearners from './components/TopLearners/TopLearners';
import AskQuestion from './components/AskQuestion/AskQuestion';
import Footer from './components/Footer/Footer';
import Questions from './components/Questions/Questions';
import QuestionDetails from './components/Questions/Question/QuestionDetails/QuestionDetails';
import Article from './components/Article/Article';
import WriteArticle from './components/WriteArticle/WriteArticle';
import Authentication from './components/Authentication/Authentication';
import UserProfile from './components/User/UserProfile';
import AdminBoard from './components/AdminBoard/AdminBoard';
import UserList from './components/AdminBoard/Users/UserList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                        <Footer />
                    </Route>
                    <Route path='/questions'>
                        <Navbar />
                        <Questions />
                        <Footer />
                    </Route>
                    <Route path='/login'>
                        <Navbar />
                        <Login />
                    </Route>
                    <Route path='/register'>
                        <Navbar />
                        <RegistrationForm />
                    </Route>
                    <Route path='/authentication'>
                        <Navbar />
                        <Authentication />
                    </Route>
                    <PrivateRoute path='/askQuestion'>
                        <AskQuestion />
                    </PrivateRoute>
                    <Route path='/questionDetails/:_id'>
                        <Navbar />
                        <QuestionDetails />
                        <Footer />
                    </Route>
                    <PrivateRoute path='/writeArticle'>
                        <WriteArticle />
                    </PrivateRoute>
                    <Route path='/articles'>
                        <Navbar />
                        <Article />
                        <Footer />
                    </Route>
                    <Route path='/blogs'>
                        <Navbar />
                        <Blog />
                    </Route>
                    <Route path='/topLearners'>
                        <Navbar />
                        <TopLearners />
                    </Route>
                    <Route path='/dashBoard'>
                        <AdminBoard />
                    </Route>
                    <Route path='/users'>
                        <UserList />
                    </Route>
                    <Route path='/user/profile'>
                        <Navbar />
                        <UserProfile />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default App;
