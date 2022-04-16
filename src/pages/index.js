import { StaticImage } from 'gatsby-plugin-image'; //Broken
import React from 'react';
import Layout from '../components/layout';

function IndexPage() {
	return (
		<Layout pageTitle='Travel'>
			<p>Make it to your next destinations.</p>
			<img
				className='indeximg'
				src='https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__480.jpg'
				alt='hiltonimg'
			/>
		</Layout>
	);
}

export default IndexPage;
