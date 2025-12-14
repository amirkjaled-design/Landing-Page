interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}
const Button = ({onClick, children, className=""}: ButtonProps) => {
    return(<button onClick={onClick} className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent dark:bg-fuchsia-950  ${className}`}>{children}</button>);
};
export default Button