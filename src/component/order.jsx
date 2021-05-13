import shopping_cart from "../img/iconfinder_shopping_cart_25612791.svg"; 
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {countPay} from '../count_price'
import React from "react";
import { del_more_info } from "../redux/actions";

export default function Order() {
    let bucket = useSelector((state) => state.rootReducer.pizza_bucket)

    let dispatch = useDispatch()

    function all_object() {
        let sum = 0
        for (let index = 0; index < bucket.length; index++) {
            sum += bucket[index].buy + 1
        }
        return sum
    }

    return (
        <div className="header__column">
            <NavLink onClick={() => dispatch(del_more_info())} to='bucket' className="header__button">
                <div className="header__button-btn">{countPay(bucket) ? countPay(bucket) : 0}Р</div>
                <div className="header__button-btn"><img src={shopping_cart} alt="" /></div>
                <div className="header__button-btn">{all_object() - bucket.length }</div>
            </NavLink>
        </div>
    )
}