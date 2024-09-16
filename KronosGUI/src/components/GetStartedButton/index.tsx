import styled from "./styled.module";

const Button = ({ title, ...props }: { title: string }) => {
    const scrollToTarget = () => {
        window.scrollTo({
            top: 835,
            behavior: "smooth",
        });
    };

    return (
        <button onClick={scrollToTarget} {...props} className={styled.Button}>
            {title}
        </button>
    );
};

export default Button;
