import { StyledButton } from "./styled.module";

const Button = ({ children, ...props }: { children: string }) => {
    const scrollToTarget = () => {
        window.scrollTo({
            top: 835,
            behavior: "smooth",
        });
    };

    return (
        <StyledButton onClick={scrollToTarget} {...props}>{children}</StyledButton>
    );
};

export default Button;