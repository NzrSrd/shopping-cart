import React from 'react';
import Header from './Header';
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import sampleProduct from '../sampleProducts';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      cartArray: [],
      totalPrice: 0,
      // cartStatus: {display:'none'},
      // display:true
    };
  }
  loadSample = () => {
    this.setState({products: sampleProduct})
  };

  addToCart=  product => {
    let Cartproducts = [...this.state.cartArray,product];
    this.setState({
      cartArray: Cartproducts ,
      totalPrice: this.state.totalPrice + product.price,
    });
  };

  removeProductFromCart = product => {
    let newCartArray;
    let tempArr = this.state.cartArray.filter(e => e.item === product.item);
    tempArr.pop();
    newCartArray = this.state.cartArray.filter(e => e.item !== product.item);
    newCartArray = [...newCartArray, ...tempArr];
    this.setState({
      cartArray: newCartArray,
      totalPrice: this.state.totalPrice - product.price
    });
  };

  // showCart = () => {
  //     if(this.state.display){
  //         this.setState({
  //             cartStatus: {display:'block',position:'fixed',top:'50px',right:'0px'},
  //             display:false
  //         })
  //     }else{
  //         this.setState({
  //             cartStatus: {display:'none',position:'fixed',top:'50px',right:'0px'},
  //             display:true
  //         })
  //     }
  //}

  componentDidMount() {
    this.loadSample()
  }
  render() {
    return(
        <div >
          <Header/>
          <div className='container card-columns'>

            {Object.keys(this.state.products).map( product => {
              let obj = this.state.products[product];
              return(
                  <div>
                    <ProductList key={product}
                                 productData={obj}
                                 addToCartHandler={this.addToCart}/>
                  </div>
              )
            })}


            <ShoppingCart styleHandler={this.state.cartStatus} cartContents={this.state.cartArray}
                          cartToTotalPrice={this.state.totalPrice}
                          removeProductHandler={this.removeProductFromCart} />

          </div>

        </div>
    )
  }
}

export default App;