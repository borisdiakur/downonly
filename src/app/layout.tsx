import './globals.css'
import localFont from 'next/font/local'
import { Montserrat } from 'next/font/google'
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/footer'

const fontDisplay = localFont({
	src: './jegelskerdig.woff2',
	variable: '--font-display',
})
const fontBody = Montserrat({ subsets: ['latin'], variable: '--font-body' })

export const metadata = {
	title: 'Downonly',
	description: 'Generated by genuine intelligence',
}

export default function RootLayout(props: {
	children: React.ReactNode
	player?: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={`${fontDisplay.variable} ${fontBody.variable} bg-snow font-body text-carbon dark:bg-cole dark:text-snow`}
		>
			<body className="grid grid-rows-[auto_1fr_auto]">
				<Nav className="container relative z-10 my-10 w-full" />
				<main>
					<div className="container flex flex-col items-stretch gap-28">
						{props.children}
					</div>
				</main>
				<Footer />
			</body>
		</html>
	)
}
