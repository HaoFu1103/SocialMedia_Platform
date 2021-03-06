import React from "react";
import { Route} from "react-router-dom";
import MenuTab from './mainPage/MenuTab';
import ProfileComponent from './mainPage/ProfileComponent';
import UsersComponent from './mainPage/UsersComponent';
import FriendsComponent from './mainPage/FriendsComponent';
import PostsComponent from './mainPage/PostsComponent';
import NewPostComponent from './mainPage/NewPostComponent';
import EccChat from './mainPage/EccChat';
import NoEccChat from './mainPage/NoEccChat';
import RegisterComponent from './mainPage/RegisterComponent';
import {Row} from 'antd';

const MainRouter = () => (
    <Route>
        <Row>
            <Route component={MenuTab}/>
            <Route exact path="/register" component={RegisterComponent}/>
            <Route exact path="/profile/:userId" component={ProfileComponent} />
            <Route exact path="/users" component={UsersComponent} />
            <Route exact path="/recent_posts" component={PostsComponent} />
            <Route exact path="/new_post" component={NewPostComponent} />
            <Route exact path="/find_friends" component={FriendsComponent} />
            <Route exact path="/ECC" component={EccChat}/>
            <Route exact path="/NoEcc" component={NoEccChat}/>
        </Row>

    </Route>


)
export default MainRouter;
