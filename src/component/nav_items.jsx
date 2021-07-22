import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { clean_order, filter_pizzes } from "../redux/actions"
import { set_now_page } from "../redux/actions"


export default function NavItems({ items }) {

    let category = useSelector(state => state.rootReducer.category)

    let dispatch = useDispatch()

    function change_filter(item) {
        dispatch(filter_pizzes(item))
        dispatch(set_now_page(1))
        dispatch(clean_order())
    }

    return (
        <>
            <div onClick={() => dispatch(filter_pizzes('Все'))} className={category === 'Все' ? 'header__nav-btn nav-btn btn-active' : 'header__nav-btn nav-btn'}><button>Все</button></div>
            {items.map((item, index) => {
                return <div key={item} onClick={() => change_filter(item)} className={category === item ? 'header__nav-btn nav-btn btn-active' : 'header__nav-btn nav-btn'}><button>{item}</button></div>
            })}
        </>
    )
}