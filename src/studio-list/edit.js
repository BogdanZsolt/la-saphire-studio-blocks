import { memo, useMemo, useState } from '@wordpress/element';
import {
	BlockContextProvider,
	__experimentalUseBlockPreview as useBlockPreview,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { Spinner } from '@wordpress/components';
import classnames from 'classnames';
import './editor.scss';

const TEMPLATE = [['ls/studio-title']];

const PostTemplateInnerBlocks = () => {
	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'wp-block-post ls-studio-list__wrapper' },
		{ template: TEMPLATE },
		{ renderAppender: false }
	);
	return <li {...innerBlocksProps} />;
};

function PostTemplateBlockPreview({
	blocks,
	blockContextId,
	isHidden,
	setActiveBlockContextId,
}) {
	const blockPreviewProps = useBlockPreview({
		blocks,
		props: {
			className: 'wp-block-post',
		},
	});

	const handleOnClick = () => {
		setActiveBlockContextId(blockContextId);
	};

	const style = {
		display: isHidden ? 'none' : undefined,
	};

	return (
		<li
			{...blockPreviewProps}
			tabIndex={0}
			// eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
			role="button"
			onClick={handleOnClick}
			onKeyPress={handleOnClick}
			style={style}
		/>
	);
}

const MemoizedPostTemplateBlockPreview = memo(PostTemplateBlockPreview);

export default function Edit(props) {
	const { clientId, attributes, setAttributes } = props;
	const { postType, perPage, order, orderBy, displayLayout } = attributes;

	const [activeBlockContextId, setActiveBlockContextId] = useState();

	const { posts, blocks } = useSelect(
		(select) => {
			const { getEntityRecords } = select(coreStore);
			const { getBlocks } = select(blockEditorStore);
			const query = {
				per_page: perPage,
				_embed: true,
				order,
				orderby: orderBy,
				parent: 0,
			};
			return {
				posts: getEntityRecords('postType', postType, query),
				blocks: getBlocks(clientId),
			};
		},
		[perPage, order, orderBy, clientId]
	);

	const blockContexts = useMemo(
		() =>
			posts?.map((post) => ({
				postType: post.type,
				postId: post.id,
			})),
		[posts]
	);

	const blockProps = useBlockProps({
		className: classnames({
			'is-flex-container': displayLayout === 'flex',
			'is-list-container': displayLayout === 'list',
		}),
	});

	if (!posts) {
		return (
			<p {...blockProps}>
				<Spinner />
			</p>
		);
	}

	if (!posts.length) {
		return (
			<p {...blockProps}>
				{' '}
				{__('No results found.', 'ls-studio-blocks')}
			</p>
		);
	}

	return (
		<ul {...blockProps}>
			{blockContexts &&
				blockContexts.map((blockContext) => (
					<BlockContextProvider
						key={blockContext.postId}
						value={blockContext}
					>
						{blockContext.postId ===
						(activeBlockContextId || blockContexts[0]?.postId) ? (
							<PostTemplateInnerBlocks />
						) : null}
						<MemoizedPostTemplateBlockPreview
							blocks={blocks}
							blockContextId={blockContext.postId}
							setActiveBlockContextId={setActiveBlockContextId}
							isHidden={
								blockContext.postId ===
								(activeBlockContextId ||
									blockContexts[0]?.postId)
							}
						/>
					</BlockContextProvider>
				))}
		</ul>
	);
}
