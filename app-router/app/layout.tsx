import "@/app/ui/global.css";

interface RootProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
