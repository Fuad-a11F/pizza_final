import img from "../img/image2.png"; 
import img1 from "../img/image22.jpg"; 
import img2 from "../img/image211.jpg"; 
import { ADD_TO_THE_BUCKET, CHANGE_SIZE,CHANGE_ANIM, CHANGE_FORM, DELETE_FROM_PIZZA_BUCKER, CHANGE_BUY_MINUS  } from "./types";
import {CLEAR_BUCKET, SHOW_ALERT,SET_PIZZES, HIDE_ALERT, SHOW_ALERT_1, CHANGE_BUY_PLUS, FILTER_PIZZES, DELETE_FORM_SIZE} from './types'

let initialState = {
    alert: false,
    alert_0: false,
    alert_1: false,
    alert_2: false,
    category: 'Все',
    sort: 'популярности',
    pages: null,
    now_page: 1,
    pizza: [
        
    ],

    pizza_bucket: [

    ],

}

function search_double(item, bucket) {
    for (let i = 0; i < bucket.length; i++) {
        if (item.id === bucket[i].id && item.form === bucket[i].form && item.size === bucket[i].size) {
            return true
        }
    }
    return false
}


export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_THE_BUCKET:
            let card_click;
            state.pizza.forEach(item => {
                if (item.id === action.payload) card_click = item
            })
            let count_order_change = state.pizza.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        count_order: item.count_order + 1
                    }
                }   
                return item
            })
            if (!search_double(card_click, state.pizza_bucket)) {
                card_click = {
                    ...card_click,
                    buy: 1,
                    bucket_id: state.pizza_bucket.length
                }
                return {...state, alert_1:true, pizza:count_order_change, pizza_bucket: state.pizza_bucket.concat( card_click )}                   
            }
            else {
                let newA = state.pizza_bucket.map( item => {
                    if (item.id === card_click.id && item.form === card_click.form && item.size === card_click.size) {
                        return {
                            ...item,
                            buy: item.buy + 1
                        }
                    }
                    return item
                })
                return {...state, alert_1:true, pizza:count_order_change, pizza_bucket: newA}
            }

            return state

        case CHANGE_SIZE:
            let size  = state.pizza.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        size: action.payload
                    }
                }
                return item
            })
            return {...state, pizza: size }

        case CHANGE_FORM:
            let form  = state.pizza.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        form: action.payload
                    }
                }
                return item
            })
            return {...state, pizza: form }

        case DELETE_FROM_PIZZA_BUCKER: 
            let temp = state.pizza_bucket.filter(item => {
                if (item.bucket_id !== action.payload.id) {
                    return item
                }
            } );
            let temp1 = state.pizza_bucket.filter((el) => el.bucket_id === action.payload.id);
            let order_change = state.pizza.map(item => {
                if (item.id === temp1[0].id) {         
                    return {
                        ...item,
                        count_order: item.count_order - temp1[0].buy
                    }
                }   
                return item
            })
            return {...state, pizza: order_change, pizza_bucket: temp}

        case CHANGE_BUY_MINUS:
            const stateq = state.pizza_bucket.map(item =>  {
                if (item.bucket_id === action.payload) {
                    return  {
                        ...item, buy: parseInt(item.buy) -1
                    }
                }
                return item
            })
            let temp11;
            state.pizza_bucket.forEach(item => {
                if (item.bucket_id === action.payload) {
                    temp11 = item
                }
            })
            let new_pizza = state.pizza.map(item => {
                if (item.id === temp11.id) {
                    return {
                        ...item,
                        count_order: item.count_order - 1
                    }
                }
                return item
            })
            return {...state, pizza: new_pizza, pizza_bucket: stateq}

        case CHANGE_BUY_PLUS:
            const stateqq = state.pizza_bucket.map(item =>  {
                if (item.bucket_id === action.payload) {
                    return  {
                        ...item, buy: parseInt(item.buy) + 1
                    }
                }
                return item
            })
            let temp111;
            state.pizza_bucket.forEach(item => {
                if (item.bucket_id === action.payload) {
                    temp111 = item
                }
            })
            let new_pizza1 = state.pizza.map(item => {
                if (item.id === temp111.id) {
                    return {
                        ...item,
                        count_order: item.count_order + 1
                    }
                }
                return item
            })
            return {...state, pizza: new_pizza1, pizza_bucket: stateqq}

        case CLEAR_BUCKET: 
            let clear_count_order =  state.pizza.map(item => {
                return {
                    ...item,
                    count_order: 0
                }
            })
            return {...state, pizza: clear_count_order, pizza_bucket: []}

        case SHOW_ALERT:
            return {...state, alert: true, alert_0:false}

        case FILTER_PIZZES:
            return {...state, category: action.payload}

        case SHOW_ALERT_1:
            return {...state, alert: false, alert_0: true}

        case HIDE_ALERT:
            return {...state, alert: false, alert_0: false, alert_1: false} 
        case DELETE_FORM_SIZE: 
            let pizza_form_size_delete = state.pizza.map(item => {
                if (item.form || item.size) {
                    return {
                        ...item,
                        form:  undefined,
                        size:  undefined
                    }
                }   
                return item
            })
            return {...state, pizza: pizza_form_size_delete}

        case CHANGE_ANIM:
            let anim_new = state.pizza_bucket.map(obj => {
                if (obj === action.payload.item) {
                    return {
                        ...obj,
                        animation: false
                    }
                }
                return obj
            })

            return {...state, pizza_bucket: anim_new}

        case SET_PIZZES:
            return {...state, pizza: action.payload}

        case 'FOR_UPDATE_PIZZA':
            return {...state,  pizza: []}

        case 'SET_LABEL_FOR_SORT':
            return {...state,  sort: action.payload}

        case  'SET_PAGES':
            let page = Math.ceil(action.payload / 8)
            return {...state, pages: page}

        case 'NOW_PAGE':
            return {...state, now_page: action.payload}

        case 'ERROR_ALERT':
            return {...state, alert_2: true}

        case 'ERROR_ALERT_HIDE':
            return {...state, alert_2: false}

        default:
            return state
    }
    
}

