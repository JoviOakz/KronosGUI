import style from "./style.module.css"

const Button = ({ children, ...props }) => {
    const scrollToTarget = () => {
        window.scrollTo({
            top: 835,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={scrollToTarget} {...props} className={style.button}>{children}</button>
    )
}

export default Button;