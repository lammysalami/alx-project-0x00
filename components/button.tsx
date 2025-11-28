import { ButtonProps } from "@/interface";

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button className={`px-4 py-2 font-medium ${className}`}>
      {title}
    </button>
  );
};

export default Button;
