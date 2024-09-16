import styled from "./styled.module"

const Button = ({ title, ...props }: { title: string }) => {
    return (
        <button {...props} className={styled.Button}>{title}</button>
    )
}

export default Button;