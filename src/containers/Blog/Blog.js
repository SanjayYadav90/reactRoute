import React, { Component } from 'react';
import Posts from '../../containers/Posts/Posts';
import {Route,Link} from 'react-router-dom';
//import axios from 'axios';
//import Post from '../../components/Post/Post';
//import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
   /*  state = {
        posts:[],
        postSelectedId:null,
        error:false
    } */
   /*  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(
          (response) => {
              const posts = response.data.slice(0,4);
              const updatedPost = posts.map(
                  (post) => {
                      return {
                          ...post,
                          author:'Max'
                      }
                  }
              )
              this.setState({posts:updatedPost})
          }
      )
      .catch(
          (error) => {
              console.log(error);
              this.setState({
                  error:true
              })
          }
      )
    } */
  /*   postSelectedHandler = (id) => {
      this.setState({
          postSelectedId:id
      });
    } */
    render () {
       /*  let post = <p>Something Went Wrong!</p>;
         if(!this.state.error){
            post = this.state.posts.map(
                (p) => {
                    return (
                        <Post 
                        title={p.title} 
                        key={p.id} 
                        author={p.author}
                         click={() => this.postSelectedHandler(p.id)} />
                    )
                }
            )
         } */
         
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to ={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quicksubmit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
               <Route path="/" exact component={Posts} />
               <Route path="/new-post" component = {NewPost} />
              {/*   <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.postSelectedId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;