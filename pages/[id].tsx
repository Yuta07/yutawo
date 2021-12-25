import { BlogJsonLd, NextSeo } from 'next-seo'

import { Post } from '@components/domain/post'
import { getPostData } from '@lib/posts'

import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	const { id } = params as { id: string }

	const post = await getPostData(id)

	return {
		props: {
			post,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

const PostPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const CLOUDINARY_URL = `https://res.cloudinary.com/https-yutaaaaa-vercel-app/image/upload/l_text:TakaoGothic_50_bold:${post.title},co_rgb:000000,w_760,c_fit/v1640180870/cloudinary_fzk9qg.png`

	return (
		<>
			<NextSeo
				title={post.title}
				description={post.preface}
				openGraph={{
					type: 'website',
					title: post.title,
					description: post.preface,
					url: `https://yutaaaaa.dev/${post.id}`,
					site_name: post.title,
					images: [
						{
							url: CLOUDINARY_URL,
							width: 800,
							height: 420,
							alt: 'yutaaaaa og image',
						},
					],
				}}
				twitter={{
					handle: '@yutaaaaa___',
					site: '@yutaaaaa___',
					cardType: 'summary_large_image',
				}}
			/>
			<BlogJsonLd
				url={`https://yutaaaaa.dev/${post.id}`}
				title={post.title}
				images={[CLOUDINARY_URL]}
				datePublished={`${post.createdAt}T09:00:00+08:00`}
				dateModified={`${post.updatedAt}T09:00:00+08:00`}
				authorName="yutaaaaa"
				description={post.preface}
			/>
			<Post post={post} />
		</>
	)
}

export default PostPage
