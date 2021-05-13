import smile from "./img/smile.png"; 
import bucket from "./img/Layer2.png"; 
import Logo from './component/logo'
import { NavLink } from "react-router-dom";

export default function EmptyBucket() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__row">
                        <Logo />                 
                    </div>          
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="bucket-empty">
                        <div className="bucket-empty__title">Корзина пустая <img src={smile} width="32" height="32" alt=""/></div>
                        <div className="bucket-empty__text">Вероятней всего, вы не заказывали ещё пиццу. <br/> Для того, чтобы заказать пиццу, перейди на главную страницу.</div>
                        <div className="bucket-empty__image"><img src={bucket} alt=""/></div>
                        <div className="bucket-empty__button black-btn"> <NavLink className='navlink' to='/'>Вернуться назад</NavLink> </div>
                    </div>
                </div>   
            </main>
        </>
    )
}