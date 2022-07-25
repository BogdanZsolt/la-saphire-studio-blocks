import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';
import metadata from './block.json';

import { ReactComponent as Logo } from '../../ls-logo.svg';

registerBlockType(metadata.name, {
	icon: { src: Logo },
	edit: Edit,
	save,
});
