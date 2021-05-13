import {CHANGE_BUY_MINUS,ADD_TO_THE_BUCKET, CHANGE_ANIM, CHANGE_BUY_PLUS, SHOW_ALERT_1, HIDE_ALERT, SHOW_ALERT, DELETE_FROM_PIZZA_BUCKER} from './types'

export const first = store => next => action =>  {   
    if (action.type  ===  DELETE_FROM_PIZZA_BUCKER) {
        return (
            action.type = CHANGE_ANIM,
            next(action),
            action.type  =  DELETE_FROM_PIZZA_BUCKER,
            setTimeout(() => {
                next(action)
            }, 470)
        )
      
        
    }

    if (action.type === CHANGE_BUY_PLUS) {
        if (store.getState().rootReducer.pizza_bucket[action.payload].buy === 10) {
            action.type = SHOW_ALERT
            return (
                next(action),
                setTimeout(() => {
                    action.type = HIDE_ALERT
                    next(action)
                }, 2500)
            ) 
        }
    }

    else if (action.type === CHANGE_BUY_MINUS) {
        if (store.getState().rootReducer.pizza_bucket[action.payload].buy === 1) {
            action.type = SHOW_ALERT_1
            return (
                next(action),
                setTimeout(() => {
                    action.type = HIDE_ALERT
                    next(action)
                }, 2500)
            )
        }
    }

    else if (action.type === ADD_TO_THE_BUCKET) {
        let obj = store.getState().rootReducer.pizza.filter(item => item.id === action.payload && item)
        for (let i = 0; i < store.getState().rootReducer.pizza_bucket.length;  i++)
            if (store.getState().rootReducer.pizza_bucket[i].id === obj[0].id && store.getState().rootReducer.pizza_bucket[i].form === obj[0].form && store.getState().rootReducer.pizza_bucket[i].size === obj[0].size)
                if (store.getState().rootReducer.pizza_bucket[i].buy > 9) {
                    action.type = SHOW_ALERT
                    return (
                        next(action),
                        setTimeout(() => {
                            action.type = HIDE_ALERT
                            next(action)
                        }, 2500)
                    )
                }
        return (
            next(action),
            setTimeout(() => {
                action.type = HIDE_ALERT
                next(action)
            }, 2000)
        )
    }

    return next(action)
}

export const second = store => next => action =>  {   
    if (action.type  === ADD_TO_THE_BUCKET) {
        let obj;
        store.getState().rootReducer.pizza.forEach(item => {
            if (item.id === action.payload) {
                obj = item
            }
        })
        if (obj.form && obj.size) {
            return next(action)
        } else {
            return (
                action.type = 'ERROR_ALERT',
                next(action),
                action.type  =  'ERROR_ALERT_HIDE',
                setTimeout(() => {
                    next(action)
                }, 2000)
            )
        }
    }
    return next(action)
}