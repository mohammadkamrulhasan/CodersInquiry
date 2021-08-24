import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import RegistrationForm from './components/Login/RegistrationForm';
// import Courses from './components/Courses/Courses';
import Blog from './components/Blog/Blog';
import TopLearners from './components/TopLearners/TopLearners';
import AskQuestion from './components/AskQuestion/AskQuestion';
// import CourseDetails from './components/Courses/CourseDetails';
import Footer from './components/Footer/Footer';
import Questions from './components/Questions/Questions';
import QuestionDetails from './components/QuestionDetails/QuestionDetails';
import Article from './components/Article/Article';
import WriteArticle from './components/WriteArticle/WriteArticle';
import Authentication from './components/Authentication/Authentication';
import UserProfile from './components/User/UserProfile';
import AdminBoard from './components/AdminBoard/AdminBoard';
import UserList from './components/AdminBoard/Users/UserList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ResponsiveNavbar from './components/ResponsiveNavbar/ResponsiveNavbar';

export const UserContext = createContext();

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            <Router>
                {/* <ResponsiveNavbar /> */}
                <Switch>
                    <Route exact path='/'>
                        <Home />
                        <Footer />
                    </Route>
                    <Route path='/questions'>
                        <Questions />
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
                    <Route path='/questionDetails'>
                        <Navbar />
                        <QuestionDetails />
                        <Footer />
                    </Route>
                    <Route path='/writeArticle'>
                        <WriteArticle />
                        {/* <Article /> */}
                    </Route>
                    {/* <Route path='/courses'>
                    <Navbar />
                    <Courses />
                    <Footer />
                </Route> */}
                    {/* <Route path='/courseDetails/:courseId'>
                    <Navbar />
                    <CourseDetails />
                    <Footer />
                </Route> */}
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
