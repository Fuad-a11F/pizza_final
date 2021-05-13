import {countPay, countLength} from '../count_price'
import {useSelector} from 'react-redux'


export default function BucketInfo({ items }) {
    let bucket = useSelector((state) => state.rootReducer.pizza_bucket)

    return (
        <div className="bucket-full__row info">
            <div className="bucket-full__column"><p className="bucket-full__footer-text"> Всего пицц: <span>{countLength(bucket)} шт.</span></p></div>
            <div className="bucket-full__column"><p className="bucket-full__footer-text"> Сумма заказа: <span className="span">{countPay(bucket)} Р</span></p></div>
        </div>
    )
}