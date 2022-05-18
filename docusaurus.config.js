// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "👋 Hey, I'm Andrew Robbins.",
	tagline:
		"I've been building the web for over 10 years, specializing in JavaScript, React, and PHP. Now I'm learning everything I can about Ethereum and Web3 to help build a more decentralized future. ✨",
	url: 'https://slashproof.dev',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: false,
				blog: {
					showReadingTime: true,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: false,
			},
			blog: {
				blogSidebarCount: 0,
				relatedPosts: false,
			},
			navbar: {
				title: 'Slashproof',
				logo: {
					alt: 'Andrew Robbins from Slashproof',
					src: 'img/me.jpg',
				},
				items: [
					{ to: '/blog', label: 'Blog', position: 'right' },
					{ to: '/about', label: 'About', position: 'right' },
					{ to: '/contact', label: 'Contact', position: 'right' },
					{
						label: 'Twitter',
						position: 'right',
						to: 'https://twitter.com/slashproofeth',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Links',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'About',
								to: '/about',
							},
							{
								label: 'Contact',
								to: '/contact',
							},
						],
					},
					{
						title: 'Social',
						items: [
							{
								label: 'Twitter',
								href: 'https://twitter.com/andrewmrobbins',
							},
							{
								label: 'Github',
								href: 'https://github.com/arobbins',
							},
						],
					},
				],
				copyright: `Copyright ©${new Date().getFullYear()} Slashproof. Built with good vibes in Austin, TX.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
}

module.exports = config
