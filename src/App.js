import React, { Component } from 'react';
import {Container } from 'reactstrap';
import './css/app.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/navbars/NavigationBar';
import Home from './Home'
import Dashboard from './components/dashboard/Dashboard';
import NoMatchPage from './NoMatchPage';
import SignIn from './components/auth/SignIn';
import Footer from './components/Footer';
import Tickets from './Tickets';
import FAQ from './FAQ';
import Contact from './Contact';
import Registration from './components/auth/Registration'
import Siker from './tmp/Siker';


class App extends Component {
    render() {
        return(
            <BrowserRouter>
            <NavigationBar />
            <Container>      
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/dashboard' exact component={Dashboard} />
                        <Route path='/signin' exact component={SignIn} />
                        <Route path='/tickets' exact component={Tickets}/>
                        <Route path='/faq' exact component={FAQ}/>
                        <Route path='/contact' exact component={Contact}/>
                        <Route path='/siker' exact component={Siker}/>
                        <Route path='/registration' exact component={Registration}/>
                        <Route component={NoMatchPage} />
                    </Switch>
                
            </Container>
            <Footer />
            </BrowserRouter>

        );
    }
}


export default App;