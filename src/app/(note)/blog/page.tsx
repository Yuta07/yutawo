import { TagsSidebar } from '@/components/common/Sidebar/TagSidebar'
import { Posts } from '@/components/pages/blog/Posts'

import s from './styles.module.css'

export default function Page({ params: { tag } }: { params: { tag: string | undefined } }) {
	return (
		<main className={s.container}>
			<Posts tag={tag} />
			<TagsSidebar />
		</main>
	)
}
