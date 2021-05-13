import {ADD_TO_THE_BUCKET, CHANGE_SIZE, CHANGE_FORM, DELETE_FROM_PIZZA_BUCKER, CHANGE_BUY_MINUS } from './types'
import {FILTER_PIZZES,SET_PIZZES, CLEAR_BUCKET, DELETE_FORM_SIZE, CHANGE_BUY_PLUS} from './types'


export function add_to_bucket(id) {
    return {
        type: ADD_TO_THE_BUCKET,
        payload: id
    }
}

export function change_size(size, id) {
    return {
        type: CHANGE_SIZE,
        id: id,
        payload: size
    }
}

export function change_form(form, id) {
    return {
        type: CHANGE_FORM,
        id: id,
        payload: form
    }
}

export function delete_product(id, item) {
    return {
        type: DELETE_FROM_PIZZA_BUCKER,
        payload: {
            id: id,
            item: item
        }
    }
}


export function change_buy_item(id) {
    return {
        type: CHANGE_BUY_MINUS,
        payload: id
    }
}


export function change_buy_item_2(id) {
    return {
        type: CHANGE_BUY_PLUS,
        payload: id
    }
}

export function filter_pizzes(name) {
    return {
        type: FILTER_PIZZES,
        payload: name
    }
}

export function clean_order() {
    return {
        type: CLEAR_BUCKET
    }
}


export function del_more_info() {
    return {
        type: DELETE_FORM_SIZE
    }
}


export function set_pizzes(array) {
    return {
        type: SET_PIZZES,
        payload: array
    }
}

export function for_update_pizza() {
    return {
        type: 'FOR_UPDATE_PIZZA',
    }
}

export function set_label(name) {
    return {
        type: 'SET_LABEL_FOR_SORT',
        payload: name
    }
}

export function set_pages(number) {
    return {
        type: 'SET_PAGES',
        payload: number
    }
}

export function set_now_page(number) {
    return {
        type: 'NOW_PAGE',
        payload: number

    }
}