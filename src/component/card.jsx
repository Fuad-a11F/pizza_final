
import React from 'react'
import {connect} from 'react-redux'
import {add_to_bucket} from '../redux/actions'
import {change_size} from '../redux/actions'
import { useSelector } from "react-redux"
import {change_form} from '../redux/actions'
import 'bootstrap/dist/css/bootstrap.min.css';


function Card({pizza_array, add_to_bucket, pizza_bucket, change_size, change_form}) {

    function add_bucket(e, id) {

        add_to_bucket(id)
    }

    return (        
        <>
        {pizza_array.map(item => {
            return (
                <div key={item.id} className="main__column">
                    <div className="main__img"><img src={item.image} alt="" /></div>
                    <div className="main__title">{item.name}</div>
                    <div className="main__options">
                        <div className="main__input input-long"><input onChange={() => change_form('тонкое' ,item.id)} type="radio" id={item.name} name={item.name} /><label htmlFor={item.name}>тонкое</label></div>
                        <div className="main__input input-long_1"><input onChange={() => change_form('традиционное' ,item.id)} type="radio" id={item.name + '1'} name={item.name} /><label htmlFor={item.name + '1'}>традиционное</label></div>
                        <div className="main__input little-input"><input onChange={() => change_size(26 ,item.id)} type="radio" id={item.name + " size"} name={item.name + " size"} /><label htmlFor={item.name + " size"}>26см</label></div>
                        <div className="main__input little-input_1"><input onChange={() => change_size(30 ,item.id)} type="radio" id={item.name + " size1"} name={item.name + " size"} /><label htmlFor={item.name + " size1"}>30см</label></div>
                        <div className="main__input little-input_2"><input onChange={() => change_size(40 ,item.id)} type="radio" id={item.name + " size2"} name={item.name + " size"} /><label htmlFor={item.name + " size2"}>40см</label></div>
                    </div> 
                    <div className="main__row">
                        <div className="main__price">от {item.price}P</div>
                        <button onClick={(e) => add_bucket(e, item.id)} className="main__btn orange-btn">Добавить {item.count_order !==  0 && item.count_order }</button>              
                    </div>
                </div>
            )
        })}
        </>
    )  
}

function mapStateToProps(state) {
    return {
        pizza_array: state.rootReducer.pizza,
        pizza_bucket: state.rootReducer.pizza_bucket
    }
}
const mapDispatchToProps = {
    add_to_bucket, change_size, change_form
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)