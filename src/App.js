import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import './css/app.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import Home from './Home'
import Dashboard from './components/dashboard/Dashboard';
import NoMatchPage from './NoMatchPage';
import SignIn from './components/auth/SignIn';

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
                        <Route component={NoMatchPage} />
                    </Switch>
                
            </Container>
            </BrowserRouter>

        );
    }
}

Container.propTypes = {
    fluid: true
}

export default App;