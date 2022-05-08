import React from "react"
import { useDispatch } from "react-redux"
import { set_label } from "../redux/actions"

export default function Tab({press, setPress, items}) {
    let ref_tab  = React.useRef()
    let dispatch =  useDispatch()
 
    function change_label(item) {
        dispatch(set_label(item))

        setPress(false)
    }

    React.useEffect(() => {
        function hidden_tab(e) {
            if  (!e.target.classList.contains('tab-open')) setPress(false)
        }

        if (press) window.addEventListener('click', hidden_tab);
        return ()  => window.removeEventListener('click', hidden_tab);
    }, [press]);

    return (
        <div ref={ref_tab} className={press ? 'header__tab tab-open visible' : 'header__tab tab-open'}>
            <ul className='header__ul tab-open'>
                {items.map((item, index)  => {
                    return <li key={index} onClick={() => change_label(item)} className="tab-open">{item}</li>
                })}

            </ul>
        </div>
    )
}