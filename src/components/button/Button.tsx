import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  className: string;
}

export const Button = ({ children, onClick, className, ...props }: Props) => {
  return (
    <button type="button" onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
};
