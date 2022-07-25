import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
import './editor.scss';

export default function Edit({ attributes, setAttributes, context }) {
	console.log(context);

	return (
		<li>
			<InnerBlocks allowedBlocks={['ls/studio-title']} />
		</li>
	);
}
