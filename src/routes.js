import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/bootstrap';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ShopsPage from './components/shops/ShopsPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import ViewShopPage from './components/shops/ViewShopPage';

export default(
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='about' component={AboutPage} />
    <Route path='courses' component={CoursesPage} />
    <Route path='course' component={ManageCoursePage} />
    <Route path='course/:id' component={ManageCoursePage} />
    <Route path='shops' component={ShopsPage} />
    <Route path='shop/:id' component={ViewShopPage} />
  </Route>
);
