import "@/app/ui/global.css";
import { inter } from '@/app/ui/fonts';

interface RootProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootProps) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
