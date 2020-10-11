import React, { useState } from 'react'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../Components/action/action-types/cart-action'
// import Item1 from '../../images/item1.jpg'
// import Item2 from '../../images/item2.jpg'
// import Item3 from '../../images/item3.jpg'
// import Item4 from '../../images/item4.jpg'
// import Item5 from '../../images/item5.jpg'
// import Item6 from '../../images/item6.jpg'


// function CartReducer({ action }) {

//     const [addedItems, setAddedItems] = useState([])
//     const [total, setTotal] = useState(0)



//     //INSIDE HOME COMPONENT
//     if (action.type === ADD_TO_CART) {
//         let addedItem = product_list.find(item => item.id === action.id)
//         //check if the action id exists in the addedItems
//         let existed_item = addedItems.find(item => action.id === item.id)
//         if (existed_item) {
//             addedItem.quantity += 1
//             return {
//                 total: total + addedItem.price
//             }
//         }
//         else {
//             addedItem.quantity = 1;
//             //calculating the total
//             let newTotal = total + addedItem.price

//             return {
//                 addedItems: [addedItems, addedItem],
//                 total: newTotal
//             }
//         }
//     }

//     return (
//         <div>

//         </div>
//     )
// }

// export default CartReducer;



//     const product_list = [
//         {
//             id: 1,
//             title: "product_1",
//             price: '$23,000',
//             image: "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg"
//         },
//         {
//             id: 2,
//             title: "product_2",
//             price: '$21,000',
//             image: "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg"
//         },
//         {
//             id: 3,
//             title: "product_3",
//             price: '$13,000',
//             image: "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg"
//         }
//     ]



const initState = {
    items: [
        { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg" },
        { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: 'https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg' },
        { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: 'https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg' },
        { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: 'https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg' },
        { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: 'https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg' },
        { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: 'https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg' }
    ],
    addedItems: [],
    total: 0

}



const cartReducer = (state = initState, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 6
        }
    }

    else {
        return state
    }

}

export default cartReducer
