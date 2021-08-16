import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import RegistrationForm from './components/Login/RegistrationForm';
import Courses from './components/Courses/Courses';
import Blog from './components/Blog/Blog';
import TopLearners from './components/TopLearners/TopLearners';
import AskQuestion from './components/AskQuestion/AskQuestion';
import CourseDetails from './components/Courses/CourseDetails';
import Footer from './components/Footer/Footer';
import Questions from './components/Questions/Questions';
import QuestionDetail from './components/QuestionDetail/QuestionDetail';
import Article from './components/Article/Article';
import WriteArticle from './components/WriteArticle/WriteArticle';
import Authentication from './components/Authentication/Authentication';
import UserProfile from './components/User/UserProfile';
import AdminBoard from './components/AdminBoard/AdminBoard';
import UserList from './components/AdminBoard/Users/UserList';

const App = () => {
    return (
        <Router>
            <CustomNavbar/>
            <Switch>
                <Route exact path='/'>
                    {/* customNavbar just for testing purpose */}
                    <Home />
                    <Footer />
                </Route>
                <Route path='/questions'>
                    <Questions />
                </Route>
                <Route path='/login'>
                    <Navbar />
                    <Login />
                    {/* <RegistrationForm /> */}
                </Route>
                <Route path='/register'>
                    <Navbar />
                    <RegistrationForm />
                </Route>
                <Route path='/authentication'>
                    <Navbar />
                    <Authentication />
                </Route>
                <Route path='/askQuestion'>
                    <AskQuestion />
                </Route>
                <Route path='/questionDetail'>
                    <Navbar />
                    <QuestionDetail />
                    <Footer />
                </Route>
                <Route path='/writeArticle'>
                    <WriteArticle />
                    {/* <Article /> */}
                </Route>
                <Route path='/courses'>
                    <Navbar />
                    <Courses />
                    <Footer />
                </Route>
                <Route path='/courseDetails/:courseId'>
                    <Navbar />
                    <CourseDetails />
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
                <Route path="/dashBoard">
                    <AdminBoard />
                </Route>
                <Route path="/users">
                    <UserList />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
