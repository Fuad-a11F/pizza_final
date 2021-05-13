import img from "../img/image5.png"; 
import {connect} from 'react-redux'
import {delete_product, change_buy_item, change_buy_item_2} from '../redux/actions'
import React from "react";
import  { animated, Transition } from 'react-spring'


function BucketProduct({bucket_pizzes, delete_product, change_buy_item, change_buy_item_2}) {

    function dis_func(id,  str) {
        str  === 'minus' ? change_buy_item(id) : change_buy_item_2(id)
    }
   
    return (
        <>
            {bucket_pizzes.map(item => {
                return(       
                    <Transition  
                        config={{duration: 500}}
                        key={item.bucket_id}
                        items={item.animation}
                        enter={{ opacity: 1 }}
                        leave={{ opacity: 0.5, transform: 'translateX(1400px)' }}
                        from={{ opacity: 1, transform: 'translateX(0px)' }}
                    >
                        {(styles, itemss) => itemss &&  
                            <animated.div  style={styles}>
                                <div  className="bucket-full__row product">
                                    <div className="bucket-full__column">
                                        <div className="bucket-full__img bucket-full__row">
                                            <img src={img} alt="" /> 
                                            <div>
                                                <div className="bucket-full__title">{item.name}</div>     
                                                <div className="bucket-full__text">{item.form} тесто, {item.size} см.</div>                      
                                            </div> 
                                        </div>
                                    </div>                                
                                    <div className="bucket-full__column bucket-full__row up">
                                        <div className="bucket-full__round-btn"><button onClick={() => dis_func(item.bucket_id, 'minus')}>-</button></div>
                                        <p className="count">{item.buy}</p>
                                        <div className="bucket-full__round-btn"><button onClick={() => dis_func(item.bucket_id, 'plus')}>+</button></div>
                                    </div>
                                    <div className="bucket-full__column up"><p className="price">{item.price * item.buy}P</p></div>
                                    <div className="bucket-full__column up"><div className="bucket-full__round-btn gray"><button onClick={() => delete_product(item.bucket_id, item)}>x</button></div></div>
                                </div>
                            </animated.div>
                        }
                    </Transition>      
                    
            
                )
            })}        
        </>
    )
}

const  mapStateToProps = (state) => {
    return {
        bucket_pizzes: state.rootReducer.pizza_bucket
    }
}
const mapDispatchToProps = {
    delete_product, change_buy_item_2, change_buy_item

}


export default connect(mapStateToProps, mapDispatchToProps)(BucketProduct)