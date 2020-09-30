import React from 'react'
import './Products_card.css'
import Card from './Product_card'

function Products() {
    return (
        <>
            <div className='products'>
                <div className='products_container'>
                    <h1>Products</h1>
                    <div className='all_products'>
                        <ul className='all_products_item'>
                            <Card name='productName1' price='$23,000' pic_src='https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg' />
                            <Card name='productName2' price='$21,000' pic_src='https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg' />
                            <Card name='productName3' price='$26,000' pic_src='https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg' />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
