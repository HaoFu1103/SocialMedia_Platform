import React, {createElement} from 'react';
import SinglePostComponent from './SinglePostComponent';
import {list} from '../helper/posts';

class PostsComponent extends React.Component {
    constructor() {
        super();
        this.state={
            posts: [],
        }
    }
    componentDidMount() {
        list(1).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ posts: data });
            }
        });
    }
    render(){
        return (
            <div style={{marginLeft:50, marginTop:30}}>
                {this.state.posts.map((post)=><SinglePostComponent post={post}/>)}
            </div>    
        )
    }
}

export default PostsComponent;