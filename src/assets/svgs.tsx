export const ErrorIcon = ({ className, width }: { className?: string; width?: number }) => (
	<svg
		width={width}
		height={width}
		style={{ marginTop: "2px" }}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}>
		<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
		<g id="SVGRepo_iconCarrier">
			{" "}
			<path
				d="M12 8V12"
				stroke="#EF4444"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"></path>{" "}
			<path
				d="M12 16.0195V16"
				stroke="#EF4444"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"></path>{" "}
			<circle
				cx="12"
				cy="12"
				r="10"
				stroke="#EF4444"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"></circle>{" "}
		</g>
	</svg>
);

export const MenuIcon = ({ className, width = 20 }: { className?: string; width?: number }) => (
	<svg
		width={width}
		height={width}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}>
		<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
		<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
		<g id="SVGRepo_iconCarrier">
			{" "}
			<path
				d="M4 6H20M4 12H20M4 18H20"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"></path>{" "}
		</g>
	</svg>
);
