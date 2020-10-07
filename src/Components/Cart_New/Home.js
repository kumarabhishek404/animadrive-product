import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../Button';
import '../pages/Product.css'
import { addToCart } from './actions/cartActions'

class Home extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card_item" key={item.id}>
                    <Link className='card_item_link'>
                        <div className="card_item_pic-wrap">
                            <img src={item.img} className='card_item_image' alt={item.title} />
                        </div>
                        <div className='card_item_info'>
                            <h1 className="card_item_text">{item.title}</h1>
                            <h1>Price: {item.price}</h1>
                            <div className='product_description'>
                                <p>{item.desc}</p>
                            </div>
                            <div className='product_btn'>
                                <Button className='btn' buttonStyle='btn_outline' onClick={() => { this.handleClick(item.id) }}>Add to cart</Button>
                                <Button buttonStyle='btn_outline'>Buy now</Button>
                                {/* <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}>Add</span> */}
                            </div>

                            <div className="card-content">
                                {/* <p><b>Price: {item.price}$</b></p> */}
                            </div>
                        </div>
                    </Link>
                </div>

            )
        })

        return (
            <div className="products">
                <div className='products_container'>
                    <h3 className="center">Our items</h3>
                    <div className="all_products">
                        <div className='all_products_item'>
                            {itemList}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)