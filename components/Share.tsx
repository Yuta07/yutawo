import Image from 'next/future/image'

import styles from './Share.module.scss'

type Props = {
	slug: string
	title: string
}

export const Share = ({ slug, title }: Props) => {
	const pageUrl = `https://yutaaaaa.dev/entry/${slug}`
	const encodeTitle = encodeURIComponent(title)

	return (
		<div className={styles.container}>
			<h3 className={styles.share}>SHARE</h3>
			<a
				href={`https://twitter.com/share?url=${pageUrl}&text=${encodeTitle}&via=koppa_07`}
				rel="nofollow"
				className={styles.anchor}
				data-testid="entry-share-button"
			>
				<Image src="/assets/twitter_share.svg" alt="twitter_share" width={40} height={40} />
			</a>
		</div>
	)
}