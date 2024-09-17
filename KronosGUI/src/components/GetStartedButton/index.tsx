import { StyledButton } from "./styled.module";

const Button = ({ title, ...props }: { title: string }) => {
    const scrollToTarget = () => {
        window.scrollTo({
            top: 835,
            behavior: "smooth",
        });
    };

    return (
        <StyledButton onClick={scrollToTarget} {...props}>
            {title}
        </StyledButton>
    );
};

export default Button;