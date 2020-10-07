import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../Button'
import '../pages/Cart.css'
//import { addShipping } from './actions/cartActions'
class Recipe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            coupon: true
        }
    }


    render() {

        return (
            <>
                <div className='cart_action'>
                    <Button buttonStyle='btn_outline'>Update cart</Button>
                    <Button buttonStyle='btn_outline'>More Shop</Button>
                </div>
                <div className='final_payment'>
                    <div className='coupon_container'>
                        <h1>Coupon Discount</h1>
                        <hr />
                        <h3>Enter your coupen code if you have</h3>
                        <form>
                            <input type='text' placeholder='Enter your code' />
                            <Button path='/'>Apply</Button>
                        </form>
                    </div>
                    <div className='cart_total'>
                        <h1>Cart total</h1>
                        <hr />
                        <h3>Total amount: ${this.props.total} </h3>
                        <h3>After Discount: ${(this.props.total !== 0 && this.state.coupon) ? this.props.total - 10 : this.props.total} </h3>
                        <Button path='/order'>Proceed</Button>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
