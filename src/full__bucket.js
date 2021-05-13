import Logo from './component/logo'
import ClearBucket from './component/clear_bucket'
import BucketProduct from './component/bucket_product'
import BucketPay from './component/bucket_pay'
import BucketInfo from './component/bucket_info'
import { useSelector } from 'react-redux'
import Alert from './component/alert'


export default function FullBucket() {

    let flag = useSelector(state => state.rootReducer.alert)
    let flag_0 = useSelector(state => state.rootReducer.alert_0)

    return (
        <>
            {flag && <Alert flag={flag} danger={true}><span className='btn-close margin'>X</span> Нельзя добавлять больше 10 элементов</Alert>}
            {flag_0 && <Alert flag={flag_0} danger={true}><span className='btn-close margin'>X</span> Нельзя добавлять меньше 1 элемента</Alert>}
            <header className="header">
                <div className="container">
                    <div className="header__row">
                        <Logo />                 
                    </div>          
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="bucket-full">
                        
                        <ClearBucket />   

                        <BucketProduct />  

                        <BucketInfo />    

                        <BucketPay /> 
           
                    </div>
                </div>   
            </main>
        </>
    )
}