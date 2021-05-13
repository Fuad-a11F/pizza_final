import Order from './component/order'
import CardItems from './component/card_items'
import Logo from './component/logo'
import Navigation from './component/navigation'
import Alert from './component/alert'
import { useSelector } from 'react-redux'
import ok from './img/ok.png'
import Pagination from './component/Pagination'



export default function Main() {
    let flag = useSelector(state => state.rootReducer.alert_1)
    let flag_1 = useSelector(state => state.rootReducer.alert)
    let flag_2 = useSelector(state => state.rootReducer.alert_2)

    return (
        <>
            {flag && <Alert flag={flag}><img style={{position: 'relative', top: '-2px', left: '-3px'}} src={ok} height='18' width='20' alt="" />Добавлено</Alert>}
            {flag_1 && <Alert flag={flag_1} danger={true}><span className='btn-close margin'>X</span> Нельзя добавлять больше 10 элементов</Alert>}
            {flag_2 && <Alert flag={flag_2} danger={true}><span className='btn-close margin'>X</span> Необходимо указать параметры</Alert>}
            
            <header className="header">
                <div className="container">          
                    <div className="header__row">
                        <Logo />
                        <Order />
                    </div>
                    <nav className="header__row navigation">
                        <Navigation />
                    </nav>
                </div>
            </header>
            <main>
                <div className="container">
                    <h2 className="main">Все пиццы!</h2>         
                    <CardItems />
                    <Pagination />
                </div>           
            </main>
        </>
    )
}