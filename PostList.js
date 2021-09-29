import React,{Component} from 'react'
import PostData from '../data/posts.json'

class PostList extends Component{
    render(){
        return (
            <div>
                <hi>Hi all</hi>
                {PostData.map((postDetail, index) =>{
                    return <div style={{marginTop : "40px"}}>
                        <span>Item      : {postDetail.name} </span><br></br>
                        <span>Id        : {postDetail.id}</span><br></br>
                        <span>Price     : {postDetail.price}</span><br></br>
                        <span>Available : {postDetail.available}</span><br></br>
                        <span>Category  : {postDetail.category}</span><br></br>
                        <span>vedor     : {postDetail.vendor}</span></div>
                })}
            </div>
          );

    }
}


export default PostList;
