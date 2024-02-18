import React, { Component } from 'react';

import '../css/productComp.css'



class productComp extends Component {
    constructor(props) {
        super(props);
        this.state={
            flagLike : true 
            
        };
    }
    clickIcon = ()=>{
        this.setState(prevState => ({
            flagLike : !prevState.flagLike
        }));
    }
    
    render(
        
    ) { 
        const {imgUrl , product ,price ,description ,cls} =this.props
        return ( 
        
    <div className='productDiv'>
      <img id='img' src={imgUrl} alt="Image Food"></img>
      <h2 id='productName'>{product}</h2>
      <p id='price'>{price}</p>
      <p id='description'>{description}<br/><br/>
      <i onClick={this.clickIcon}  className={this.state.flagLike ? 'fa-regular fa-heart' : 'fa fa-heart'} id={this.state.flagLike ? 'icon':'redIcon'} ></i> </p>

      <span id='heart'></span>

   {/* <i class="fa fa-heart" aria-hidden="true"></i> */}
  </div> 

 
 );
    }
}
 
export default productComp;