import React, { Fragment } from 'react'
import Contact from './Contact/Contact'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Filial from './Filial/Filial'
import About from './About/About'


function App() {
    return (
        <Fragment>
            <Router>
                <div style={{
                    padding:'30px',
                    width:'100%',
                    color:'red',
                    
                }} >
                    <Link  to='/' >
                        FILIAL
                    </Link>
                    <Link to='/bizhaqimizda'>
                        Biz haqimizda
                    </Link>
                    <Link to='/contact'>
                        Kantakt
                    </Link>

                </div>
                <Switch>
                    <Route exact path='/'  >
                        <Filial/>
                    </Route>
                    <Route exact path='/bizhaqimizda'  >
                        <About/>
                    </Route>
                    <Route path='/contact'>
                    <Contact />

                    </Route>
                </Switch>
            </Router>

        </Fragment>
    )
}

export default App
