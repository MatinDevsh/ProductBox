import React, { Component } from 'react';

import ProductComp from './productComp'
import '../css/Comp1.css'
import Img1 from '../Image/Img1.jpeg'
import Img2 from '../Image/Img2.jpeg'
import Img3 from '../Image/Img3.jpeg'
import Img4 from '../Image/Img4.webp'


class Comp1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            flagProduct : true 
            
        };
    }
    clickHeader = ()=>{
        this.setState(prevState => ({
            flagProduct : !prevState.flagProduct
        }));
    }

    render() { 
        return (
            <>
         
        


        <div className={this.state.flagProduct ? 'mainDiv' : 'mainDivFalse'}>
                <div onClick={this.clickHeader} className={this.state.flagProduct ? 'headerDiv' : 'headerDivFalse'}>
                <h1 className='headerTitle'>Digital product</h1>
               
                <p id='logo'>
                <b><i id={this.state.flagProduct ? 'chevronUp' : 'chevronUpFalse'} className="fa-solid fa-chevron-down"></i></b>
                </p>
                 
                </div>
                
                <div className={this.state.flagProduct ? 'productMainDiv' : 'none'}>
                    <ProductComp cls={this.state.flagProduct ? 'productDiv' : 'none1'} imgUrl={Img1} product="product-1"  price="20$" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid." /> 
                    <ProductComp cls={this.state.flagProduct ? 'productDiv' : 'none1'} imgUrl={Img2} product="product-2"  price="17$" description="Lorem ipsum dolor sit, amet consectetur adipisicing." /> 
                    <ProductComp cls={this.state.flagProduct ? 'productDiv' : 'none1'} imgUrl={Img3}product="product-3"  price="32$" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, eligendi." />
                    <ProductComp cls={this.state.flagProduct ? 'productDiv' : 'none1'} imgUrl={Img4} product="product-4"  price="18$" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima error quas corrupti quo expedita ad." />
                </div>

       
        </div>
        </>
                   );
    }
}
 
export default Comp1;