import React from 'react'
import BlogPostItem from '@theme-original/BlogPostItem'
import Newsletter from '@site/src/components/newsletter'

export default function BlogPostItemWrapper(props) {
	return (
		<>
			<BlogPostItem {...props} />
			<Newsletter />
		</>
	)
}
