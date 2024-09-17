import { StyledButton } from "./styled.module";

const Button = ({ children, ...props }: { children: string }) => {
    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
}

export default Button;