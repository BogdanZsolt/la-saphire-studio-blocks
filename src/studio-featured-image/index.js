import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import metadata from './block.json';

// Import the logo
import { ReactComponent as Logo } from '../../ls-logo.svg';

registerBlockType(metadata.name, {
	icon: { src: Logo },
	edit: () => {
		return <p>Egy szipi-szupi kép</p>;
	},
	save: () => {
		return null;
	},
});
