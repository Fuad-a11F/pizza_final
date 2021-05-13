import  { animated, Transition } from 'react-spring'

export default function Alert({children, danger, flag})  {
    return (
        <Transition items={flag} enter={{ opacity: 1 }} leave={{opacity: 0 }} from={{opacity: 0 }}>
        {(styles, item) => 
            item && 
            <animated.div style={styles}>
                <div className={`alert ${danger ? 'alert-danger' : 'alert-success'} absolute position-fixed`} role="alert">
                    {children}
                </div>
            </animated.div>}
        </Transition>

    )
}