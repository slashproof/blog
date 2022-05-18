import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import Newsletter from '@site/src/components/newsletter'

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className='container'>
				<div className='section-wrapper'>
					<div className='section-intro'>
						<h1 className='hero__title'>{siteConfig.title}</h1>
						<p className='hero__subtitle'>
							I've been building the web for over 10 years, specializing in
							JavaScript, React, and{' '}
							<a href='https://wpshop.io/' target='_blank'>
								running a SaaS company
							</a>
							. Now I'm learning everything I can about Ethereum and Web3 to
							help build a more decentralized future. ✨
						</p>
						<p>Let's learn Ethereum and Web3 together.</p>
						<div className={styles.buttons}>
							<Link className='button button--secondary button--lg' to='/blog'>
								Read the blog
							</Link>
						</div>
					</div>
					<div className='section-email'>
						<Newsletter />
					</div>
				</div>
			</div>
		</header>
	)
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description='Description will go into a meta tag in <head />'>
			<HomepageHeader />
		</Layout>
	)
}
