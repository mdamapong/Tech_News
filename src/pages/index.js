import React from 'react';
import { NewsContextProvider } from '../components/NewsContext';
import News from '../components/News';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

function IndexPage() {
	return (
		<Layout pageTitle='Tesla Today'>
			<p>I'm making this by following the Gatsby Tutorial.</p>
		</Layout>
	);
}

export default IndexPage;
