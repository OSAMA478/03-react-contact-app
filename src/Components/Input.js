import React, { useEffect } from "react";

const Input = React.forwardRef((props, ref) => {
	const classes = `grid grid-cols-[1fr_2fr] ${props.className}`;
	// let val;
	// useEffect(() => {
	// 	val = props.val;
	// }, []);
	return (
		<div className={classes}>
			<label htmlFor={props.for} className="m-2">
				{props.label}
			</label>
			<input
				// onChange={props.onChange}
				// value={props.val}
				// value={val}
				ref={ref}
				id={props.for}
				name={props.for}
				className="m-2 rounded"
			/>
		</div>
	);
});

export default Input;
