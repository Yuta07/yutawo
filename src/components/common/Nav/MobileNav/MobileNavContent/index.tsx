import Link from 'next/link'

import AboutSVG from '/public/link/about.svg'
import BlogSVG from '/public/link/blog.svg'
import TsuredureSVG from '/public/link/tsuredure.svg'
import WorksSVG from '/public/link/works.svg'

import { useEffect, useState } from 'react'

import { ThemeSwitch } from '@/components/ui/ThemeSwitch'

import s from './styles.module.css'

type Props = {
	isOpen: boolean
	onClose: () => void
}

const NAV_LIST = [
	{ name: 'About', link: '/about', image: AboutSVG },
	{ name: 'Blog', link: '/blog', image: BlogSVG },
	{ name: 'Tsuredure', link: '/tsuredure', image: TsuredureSVG },
	{ name: 'Works', link: '/works', image: WorksSVG },
] as const

export const MobileNavContent = ({ isOpen, onClose }: Props) => {
	const [isInit, setIsInit] = useState(false)

	useEffect(() => {
		if (isInit) return
		if (!isInit && !isOpen) return

		setIsInit(true)
	}, [isOpen, isInit])

	return (
		<div className={!isInit && !isOpen ? s.initContainer : isOpen ? s.openContainer : s.closeContainer}>
			<div className={s.header}>
				<p className={s.headerTitle}>Menu</p>
				<button className={s.closeButton} onClick={onClose}>
					<span className={s.buttonTxt}>Close</span>
					<div className={s.buttonIcon}>
						<span className={s.topBottomBorder} />
						<span className={s.bottomTopBorder} />
					</div>
				</button>
			</div>
			<nav className={s.nav}>
				<ul className={s.navList}>
					{NAV_LIST.map((nav, i) => {
						const Image = nav.image
						return (
							<li key={nav.name} className={s.navListItem}>
								<Link className={s.navListItemAnchor} data-row={i} href={nav.link}>
									<Image className={s.navListItemSVG} />
									<span className={s.navListItemAnchorTxt}>{nav.name}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
			<div className={s.footer}>
				<div className={s.themeButton}>
					<ThemeSwitch />
				</div>
			</div>
		</div>
	)
}