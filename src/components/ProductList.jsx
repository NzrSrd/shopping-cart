import React from 'react';

class ProductList extends React.Component {
    render() {
        return(
            <React.Fragment>
                    <div className={'container card'} key={this.props.productData.id}>
                        <div className="card-body">
                            <img className="card-img-top" alt={this.props.productData.item}
                                 src={this.props.productData.srcImage}/>
                            <h2 className="card-title p-3">
                                {this.props.productData.item}
                            </h2>
                            <h3 className={'alert-info text-center'}>
                                Price: {this.props.productData.price} {this.props.productData.currency}
                            </h3>
                            <p className="card-text">
                               <strong>Description: </strong>{this.props.productData.description}
                            </p>
                            <button className="btn btn-primary"
                                    onClick={this.props.addToCartHandler.bind(this,this.props.productData)}>
                                + Add to the cart
                            </button>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default ProductList;