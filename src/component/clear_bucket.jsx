import { useDispatch } from "react-redux";
import card from "../img/iconfinder_shopping_cart_256127.svg"; 
import trash from "../img/iconfinder_trash_2_33249271.svg"; 
import { clean_order } from "../redux/actions";

export default function ClearBucket() {
    let dispatch = useDispatch()

    return (
        <div className="bucket-full__row">
            <div className="bucket-full__column"><img className="button-full__icon_1" src={card} alt=""/>  <span className="bucket-full__column-title">Корзина</span></div>
            <div className="bucket-full__column"><img className="button-full__icon" src={trash} alt=""/> <button onClick={() => dispatch(clean_order())} className="bucket-full__column-text">Очистить корзину</button></div>   
        </div>
    
    )
}