import { NavLink } from "react-router-dom";

export default function BucketPay({ items }) {

    return (
        <div className="bucket-full__row">
            <div className="bucket-full__column"><NavLink className='bucket-full__back navlink lightgray' to='/'>Вернуться назад</NavLink></div>
            <div className="bucket-full__column"><button className="bucket-full__btn orange-btn">Оплатить сейчас</button></div>
        </div>
    )
}