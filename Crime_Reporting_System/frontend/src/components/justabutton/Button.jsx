import Buttonstyle from './Button.module.css';
function Button({className, children, onClick}) { // onClick can also be passed as a prop
    return(
        <button onclick={`${onClick}`} className={`${Buttonstyle.button} ${className}`}>
            {children}
        </button>
    )
}

export default Button;