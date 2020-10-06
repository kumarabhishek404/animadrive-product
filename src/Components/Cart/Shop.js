import React, { Component } from 'react';
import '../pages/Product.css'
// import { connect } from 'react-redux'
import Card from '../pages/Product_card'
// import Button from '../Button'
// import { addToCart } from './actions/cartActions'


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: 'https://elcopcbonline.com/photos/product/4/176/4.jpg' },
                { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: 'https://elcopcbonline.com/photos/product/4/176/4.jpg' },
                { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: 'https://elcopcbonline.com/photos/product/4/176/4.jpg' },
                { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: 'https://elcopcbonline.com/photos/product/4/176/4.jpg' },
                { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: 'https://elcopcbonline.com/photos/product/4/176/4.jpg' },
                { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: 'https://elcopcbonline.com/photos/product/4/176/4.jpg' }
            ]
        }
    }


    // handleAddToCart = (id) => {
    //     this.props.addToCart(id);
    // }

    render() {
        let itemList = this.state.items.map(item => {
            return (
                <ul className='all_products_item' key={item.id}>
                    <Card id={item.id} name={item.title} price={item.price} description={item.desc} pic_src={item.img} />
                </ul>
            )
        })

        return (
            <div className="products">
                <div className='products_container'>
                    <h1>Products</h1>
                    <div className='all_products'>
                        {itemList}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;