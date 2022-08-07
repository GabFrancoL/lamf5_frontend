import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/client/home';
import Events from '../pages/client/events';
import Members from '../pages/client/members';
import Blog from '../pages/client/blog';
import Contact from '../pages/client/contact';

export default function PageRouter() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/events' exact component={ Events } />
                {/* <Route path='/events/:id' exact component={ EventDetails } />*/}
                <Route path='/members' exact component={ Members } />
                <Route path='/blog' exact component={ Blog } />
                {/* <Route path='/blog/:id' exact component={ BlogPost } />*/}
                <Route path='/contact' exact component={ Contact } />
            </Switch>
        </BrowserRouter>
    )
}