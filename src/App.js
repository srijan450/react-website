import React from 'react'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/Footer';
function App() {
    return (
        <div className='mainContainer'>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App
