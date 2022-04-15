import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
	container,
	heading,
	navLinks,
	navLinkItem,
	navLinkText,
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div className={container}>
			<title>
				{pageTitle} | {data.site.siteMetadata.title}
			</title>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link to='/' className={navLinkText}>
							Home
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to='/news' className={navLinkText}>
							News
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to='/about' className={navLinkText}>
							About
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to='/contact' className={navLinkText}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 className={heading}>{pageTitle}</h1>
				{children}
			</main>
		</div>
	);
};
export default Layout;
