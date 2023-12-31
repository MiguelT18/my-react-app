import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function PrevNavButton({ prev }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<Link
			to={prev}
			className='w-10 right-5 top-5 fixed z-40'>
			<FontAwesomeIcon
				className='w-full h-full text-main-red'
				icon={faCircleLeft}
				beatFade
			/>
		</Link>
	);
}
