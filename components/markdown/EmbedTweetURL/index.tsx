import Script from 'next/script'
import { useEffect, useRef } from 'react'

type Props = {
	href: string
}

declare global {
	interface Window {
		twttr: any
	}
}

export const EmbedTweetURL = ({ href }: Props) => {
	const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!window.twttr) return
		if (!window.twttr.widgets) return
		window.twttr.widgets.load(containerRef.current)
	}, [])

	return (
		<>
			<Script
				async
				dangerouslySetInnerHTML={{
					__html: `
							window.twttr = (function(d, s, id) {
								var js, fjs = d.getElementsByTagName(s)[0],
									t = window.twttr || {};
								if (d.getElementById(id)) return t;
								js = d.createElement(s);
								js.id = id;
								js.src = "https://platform.twitter.com/widgets.js";
								fjs.parentNode.insertBefore(js, fjs);

								t._e = [];
								t.ready = function(f) {
									t._e.push(f);
								};

								return t;
							}(document, "script", "twitter-wjs"));
						`,
				}}
			/>
			<div ref={containerRef} className="container" data-testid="markdown-tweet-link">
				<blockquote className="twitter-tweet">
					<a href={href} />
				</blockquote>
			</div>
			<style jsx>{`
				.container {
					width: max-content;
					margin: 60px auto 0;
					cursor: pointer;
				}

				@media screen and (max-width: 640px) {
					width: 100% !important;
					max-width: 320px;
				}
			`}</style>
		</>
	)
}
