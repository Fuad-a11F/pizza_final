import './App.css';
import React from 'react';
import FullBucket from './full__bucket'
import EmptyBucket from './empty_bucket'
import Main from './main'
import {BrowserRouter,  Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { set_pizzes, for_update_pizza, set_pages } from './redux/actions';
import axios from 'axios'


function App() {

  let bucket = useSelector((state) => state.rootReducer.pizza_bucket)
  let dispatch = useDispatch()
  let [state,   setState]  =   React.useState(false)
  let category = useSelector(state => state.rootReducer.category)
  let sortBy = useSelector(state => state.rootReducer.sort) 
  let now_page =  useSelector(state => state.rootReducer.now_page)

  let sort;
  switch (sortBy) {
    case 'популярности':
      sort = 'population'
      break;

    case 'по цене':
    sort = 'price'
    break;

    case 'по алфавиту':
      sort = 'name'
      break;

    default:
      break;
  }

  React.useEffect( async () => {
    setState(true)
    dispatch(for_update_pizza())
    await axios.get(`http://localhost:3001/pizza?${category !== "Все" ? 'type='+category : ''}&_sort=${sort}&_page=${now_page}`) // &_order=desc&_limit=8
    .then(data => dispatch(set_pizzes(data.data)))
    await axios.get(`http://localhost:3001/pizza_pages?${category !== "Все" ? 'type='+category : ''}`)
    .then(data => dispatch(set_pages(data.data)))
    setState(false)
  }, [category, sortBy, now_page])


  return (   
    <BrowserRouter>
        <div className="wrapper">   
            <Route exact path='/' component={Main}/>
            <Route path='/bucket' component={bucket.length === 0 ? EmptyBucket : FullBucket}/>
            {state && <div className="center"> 
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div> }
        </div>     
    </BrowserRouter>
  );
}

export default App;
