import SpanProps from "./span.types";

function Span({ className, children, ...rest }: SpanProps) {
	return (
		<button {...rest} className={`span-style ${className}`}>
			{children}
		</button>
	);
}

export default Span;