import { GlobalHeader } from '@/components/common/Header/GlobalHeader'

import s from './styles.module.css'

import type { ReactNode } from 'react'

type PortfolioLayoutProps = {
	children: ReactNode
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
	return (
		<>
			<GlobalHeader />
			<div className={s.container}>{children}</div>
		</>
	)
}
