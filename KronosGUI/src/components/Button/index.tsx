import style from "./style.module.css"

const Button = ({ children, ...props }) => {
    return (
        <button {...props} className={style.button}>{children}</button>
    )
}

export default Button;