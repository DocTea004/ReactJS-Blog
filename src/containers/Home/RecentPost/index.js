import React from "react";
import Card from "../../../components/UI/Card"

const Recent=(props)=>{
    return(
        <div style={props.style}>
        <Card style={{marginBottom:'20px'}}>
                <div className="postImageWrapper">
                <img src={require("../../../assets/blogPostImages/memories-from.jpg")} alt="Image"  />
                </div>

                <div style={{textAlign:'center'}}>
                    <span>Featured</span>
                    <h2>Beauty and Fashion</h2>
                    <p>Purus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortor montes placerat tortor natoque ante volutpat Class class platea hymenaeos. Nibh. Nec Ipsum tincidunt nam cubilia. Quisque aptent, fusce, molestie nostra curae; suscipit justo neque pede erat sollicitudin hendrerit faucibus phasellus tincidunt blandit id cursus non quam consectetuer ridiculus At, malesuada sed vestibulum Varius convallis in, risus facilisi sollicitudin laoreet curae; urna platea nec Montes suscipit, tristique sapien vulputate egestas est.\n\nLacus pretium. Vulputate sed penatibus commodo. Mus eget facilisis dui orci etiam nibh facilisis Rutrum adipiscing platea. Torquent pulvinar quam. Diam ante dignissim tincidunt proin curae; nulla nisi. Facilisi. Ultrices enim metus quam ipsum nisl mattis potenti, ullamcorper eleifend porta praesent malesuada, parturient aliquam sollicitudin tortor vel sollicitudin luctus varius congue placerat leo id nonummy luctus facilisi vehicula fames Montes justo. Ridiculus vel aliquam class dictumst. Malesuada taciti est id tortor</p>
                    <button>Read More</button>
                </div>
        </Card>

       
        </div>
    )
}

export default Recent;