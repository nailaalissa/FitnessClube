import type { ButtonProps } from "./button.types";

import "./button.css";
function Button({ className, children,disabled, ...rest }: ButtonProps) {
	return (
		<button {...rest} className={`button-style ${className}`} disabled={disabled}>
      {children}
      
		</button>
	);
}

export default Button;