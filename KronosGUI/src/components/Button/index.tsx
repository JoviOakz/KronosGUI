import { StyledButton } from "./styled.module";

const Button = ({ title, ...props }: { title: string }) => {
    return (
        <StyledButton {...props}>{title}</StyledButton>
    )
}

export default Button;