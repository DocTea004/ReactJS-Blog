import React from "react";
import './style.css';
import Card from "../../components/UI/Card";
import Sidebar from "../../components//SideBar";
import Recent from "./RecentPost";
import blogData from "../../data/blog.json";
import Layout from "../../components/Layout";

const Sideimage=(props)=>{
    return(
        <div style={{
            height:`${props.height}px`
        }}>
         <img src={props.src} alt=""  />
        </div>
    )
}

const ImageGallery=(props)=>{
    return(
        <div className="galleryPost" style={props.galleryStyle}>

              <section style={{width:'70%'}}>
                  <div className="mainImageWrapper">
                  <img src={require("../../assets/blogPostImages/screen.jpg")} alt=""  />
                  </div>
              </section>
              <section className="sideImageWrapper" style={{width:'30%'}}>

                 <Sideimage  
                  height={props.sideImageHeight}
                  src={require("../../assets/blogPostImages/"+props.imagesArray[0])}
                  alt=""
                />

                  <Sideimage  
                  height={props.sideImageHeight}
                  src={require("../../assets/blogPostImages/"+props.imagesArray[2])}
                  alt=""
                 />

                <Sideimage  
                  height={props.sideImageHeight}
                  src={require("../../assets/blogPostImages/"+props.imagesArray[3])}
                  alt=""
                />
                
              </section>
              </div>
    )
}

const Home=(props)=>{

    const ImageAr=blogData.data.map(post=>post.blogImage)


    const galleryHeight=450;
    const galleryStyle={
        height:galleryHeight+'px',
        overflow:'hidden'
    }

    const sideImageHeight=galleryHeight/3;

    return(
      <div>
          <Card>

            <ImageGallery
                largeWidth="70%"
                smallWidth="30%"
                sideImageHeight={sideImageHeight}
                galleryStyle={galleryStyle}
                imagesArray={ImageAr}                
            />
              
          </Card>
         
            <Layout>
            <Recent style={{width:'70%'}} />           
            </Layout>

          
      </div>
    )
}


export default Home;