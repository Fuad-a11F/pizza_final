import { useDispatch, useSelector } from "react-redux"
import { set_now_page } from "../redux/actions"


export default function Pagination() {

    let pages =  useSelector(state =>  state.rootReducer.pages)
    let now_page =  useSelector(state =>  state.rootReducer.now_page)
    let dispatch  = useDispatch()

    let array_page = []
  
    for (let i = 1; i <= parseInt(pages); i++) {
        array_page.push(i);
    }

    return (
        <div className='pagination'>
            <ul>
                {array_page.map(item =>  {
                    return <li onClick={() => dispatch(set_now_page(item))} key={item} className={now_page !== item ? 'pagination__item' : 'pagination__item active-item'}>{item}</li>
                })}
            </ul>
        </div>
    )
}