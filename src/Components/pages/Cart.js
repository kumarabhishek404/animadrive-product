import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../Cart_New/actions/cartActions'
import Recipe from '../Cart_New/Recipe'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '../Button'
import '../pages/Cart.css'

class Cart extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (

                        <div className="product_item_list" key={item.id}>
                            <div className='product_item_container'>

                                <div className="cart_product_image">
                                    <figure className='product_image_wrap'>
                                        <img src={item.img} />
                                    </figure>
                                    <h2>{`$${item.price}`}</h2>
                                </div>
                                <div className='cart_product_info'>
                                    <div>
                                        <h2>{item.title}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                    <h2 className='price_head'>{`$${item.price * item.quantity}`}</h2>
                                </div>
                                <div className='product_action'>
                                    <div className='product_quantity'>
                                        <Link to="/cart"><RemoveIcon onClick={(item.quantity > 1) ? (() => this.handleSubtractQuantity(item.id)) : null} /></Link>
                                        <h3>{item.quantity}</h3>
                                        <Link to="/cart"><AddIcon onClick={() => { this.handleAddQuantity(item.id) }} /></Link>
                                    </div>
                                    <div>
                                        <Button onClick={() => { this.handleRemove(item.id) }}>Remove</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
        return (
            <div className="cart">
                <h1>Cart</h1>
                <div className="cart_container">
                    <h2>You have ordered:</h2>
                    <div className="cart_container_wrapper">
                        {addedItems}
                    </div>
                    <Recipe />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)