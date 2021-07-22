import { NavLink } from "react-router-dom";
import axios from 'axios'
import { useSelector } from "react-redux";

export default function BucketPay({ items }) {

    let buckets = useSelector(store => store.rootReducer.pizza_bucket)

    function SendEmail() {
        axios.post(`http://localhost:3001/email`, {buckets})
    }

    return (
        <div className="bucket-full__row">
            <div className="bucket-full__column"><NavLink className='bucket-full__back navlink lightgray' to='/'>Вернуться назад</NavLink></div>
            <div className="bucket-full__column"><button className="bucket-full__btn orange-btn" onClick={() => SendEmail()}>Оплатить сейчас</button></div>
        </div>
    )
}