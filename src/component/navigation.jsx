import React from "react"
import { useSelector } from "react-redux"
import NavItems from './nav_items'
import Tab from './tab'


export default function Navigation() {
    let [press, setPress] = React.useState(false)
    let sortBy = useSelector(state => state.rootReducer.sort) 
    return (
        <>
            <div className="header__column header__row">
                <NavItems items={['Мясные','Вегетерианская','Гриль','Острые','Закрытые']}/>
            </div>
            <div className="header__column">
                <span className="header__sort">Сортировка по: </span><button onClick={() => setPress(!press)} className="header__sort-btn">{sortBy}</button>
                <Tab items={['популярности', 'по цене', 'по алфавиту']} setPress={setPress} press={press}/>
            </div>
        </>      
    )
}