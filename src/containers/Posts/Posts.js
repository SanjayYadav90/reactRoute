import React,{Component} from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import  './Posts.css';
class Posts extends Component{
    state = {
        posts:[],
        postSelectedId:null,
        error:false
    }
    componentDidMount(){
        console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(
            (response) => {
                const posts = response.data.slice(0,4);
                const updatedPost = posts.map(
                    (post) => {
                        return {
                            ...post,
                            author:'Kumar'
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
      }
      postSelectedHandler = (id) => {
        this.setState({
            postSelectedId:id
        });
      }
    render(){
        let post = <p>Something Went Wrong!</p>;
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
        }
        return (
            <section className="Posts">
            {post}
        </section>
        )
    }
}

export default Posts;