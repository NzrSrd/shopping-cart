import React from 'react';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.currencies = {
            euro: {
                name: '€',
                rate: 0.87
            },
            usd: {
                name: '$',
                rate: 1,
            },
            egp: {
                name: 'E£',
                rate: 17.93
            }
        }
        this.state = {
            currency: this.currencies.usd,
            rate: 1,
            totalPrice: 0
        }
    }

    handleChange = (e) => {
        let newRate = 1;

        if (!this.currencies.hasOwnProperty(e.target.value)) {
            return;
        }
        if ( this.currencies[e.target.value].name === '$') {
            newRate = 1;
        }
        if ( this.currencies[e.target.value].name === '€') {
            newRate = 0.87;
        }
        if ( this.currencies[e.target.value].name === 'E£') {
            newRate = 17.93;
        }
        this.setState({
            currency: this.currencies[e.target.value],
            rate:newRate,
        });

        this.calculatePrice();

    };

    calculatePrice = () => {

       return this.props.cartToTotalPrice;

     //this.props.cartToTotalPrice * this.state.rate
    };

    render() {
        return(
            <React.Fragment>
                <div className="card" style={this.props.styleHandler}>
                    <div >
                        <table className={"table table-md text-center"}>
                            <thead >
                                <th scope={'col'}>
                                    Your Cart
                                </th>
                                <th>
                                    Totals
                                </th>
                                <th> </th>
                            </thead>
                            <tbody>
                                <tr className={"bg-info view overlay zoom"}>
                                    <th scope={'row'} className={"bg-info"}>
                                        Total Items
                                    </th>
                                    <td className={"bg-info"}>
                                        {this.props.cartContents.length}
                                    </td>
                                    <td> </td>
                                </tr>
                                {this.props.cartContents.map((cartItem) => {
                                    return(
                                        <tr className={"bg-light"}>
                                            <th scope={'row'} className={"bg-light"}>
                                                {cartItem.item}
                                            </th>
                                            <td className={"bg-light"}>
                                                {cartItem.price * this.state.rate} {this.state.currency.name}
                                            </td>
                                            <td>
                                               <button onClick={this.props.removeProductHandler.bind(this,cartItem)}
                                                       className={'btn btn-warning'}> x </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                                <tr className={"bg-warning"}>
                                    <th scope={'row'} className={"bg-warning"}>
                                        Total Price
                                    </th>
                                    <td className={"bg-warning"}>
                                        {this.calculatePrice()*this.state.rate} {this.state.currency.name}
                                    </td>
                                    <td> </td>
                                </tr>
                                <tr >
                                    <td colSpan={'3'}>
                                        <select className={'custom-select mr-sm-2'}
                                                value={this.state.value}
                                                onChange={this.handleChange}>
                                            <option selected disabled>Choose currency</option>
                                            <option value="euro"> Euro (€) </option>
                                            <option value="egp"> Egyptian Pound (E£) </option>
                                            <option value="usd"> US Dollars ($) </option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ShoppingCart;