import React from "react";
import "./style.css";
import BlogPost from "../../components/BlogPost";
import SideBar from "../../components/SideBar";
import Layout from "../../components/Layout";

const Posts=(props)=>{
    
    console.log(props);

    return(
        
        <Layout>
        <BlogPost {...props} />
        </Layout>
        
        
    )
}

export default Posts;