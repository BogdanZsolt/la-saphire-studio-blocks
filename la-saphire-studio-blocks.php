<?php
/**
 * Plugin Name:	La Saphire Studio Blocks
	* Plugin URI:	https://zsoltbogdan.hu
 * Description:		Example static block scaffolded with Create Block tool.
 * Requires at least:	5.9
 * Requires PHP:	7.0
 * Version:	0.1.0
 * Author:	Bogdán Zsolt
	* Author URI: https://zsoltbogdan.hu
 * License:	GPL-2.0-or-later
 * License URI:	https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: 	ls-studio-blocks
 *
 * @package	la-saphire
*/

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
*/

if(!defined('ABSPATH')) exit;

if(!class_exists( 'LS_Studio_Blocks' ) ){
	class LS_Studio_Blocks{
		function __construct(){
			add_action( 'init', array( $this, 'create_block_la_saphire_studio_blocks_block_init' ) );
			require_once( plugin_dir_path( __FILE__ ) . 'post-types/class.ls-studio-courses-cpt.php' );
			$LS_Studio_Post_Type = new LS_Studio_Post_Type();
			add_filter( 'block_categories_all', array( $this, 'kc_new_gutenberg_category' ), 10, 2 );
			add_action( 'init', array( $this, 'la_saphire_studio_blocks_register_video_metabox_template' ) );
		}

		public static function activate(){
			update_option( 'rewrite_rules', '' );
		}

		public static function deactivate(){
			flush_rewrite_rules();
		}

		public static function uninstall(){

		}

		// Custom Categories
		public function kc_new_gutenberg_category($categories, $post){
			return array_merge(
				array(
					array(
						'slug'	=> 'la-saphire',
						'title'	=> 'La Saphire',
						'icon' => 'awards',
					),
				),
				$categories,
			);
		}

		public function la_saphire_studio_blocks_register_video_metabox_template(){
			$post_type_object = get_post_type_object( 'ls-courses' );
			$post_type_object->template = array(
				array('ls/meta-video')
			);
		}

		public function ls_studio_list_render($attributes, $content, $block){
			$query_args = array(
				'post_type'	=> 'ls-courses',
				'order'	=> 'ASC',
				'orderby'	=> 'title',
				'posts_per_page' => -1,
				'post_parent'	=> 0,
			);
			$query = new WP_Query($query_args);
			if(!$query->have_posts()){
				return '';
			}
			$classnames = 'ls-studio-list__wrapper';
			$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $classnames ) );
			$content = '';
			while ( $query->have_posts() ) {
				$query->the_post();
				$block_instance = $block->parsed_block;
				$block_instance['blockName'] = 'core/null';
				$block_content = ( new WP_Block(
						$block_instance,
						array(
							'postType' => get_post_type(),
							'postId'	=> get_the_ID(),
						)
					)
				)->render(array('dynamic'=> false));
				$post_classes = implode( ' ', get_post_class( 'wp-block-post' ) );
				$content .= '<li class="' . $post_classes . '">' . $block_content . '</li>';
			}
			return sprintf(
				'<ul %1$s>%2$s</ul>',
				$wrapper_attributes,
				$content,
			);
		}

		public function ls_studio_title_render($attributes, $content, $block){
			if ( ! isset( $block->context['postId'] ) ) {
				return '';
			}
		 $post_ID	= $block->context['postId'];
			$title = get_the_title();
			$tag_name = 'h5';
			$align_class_name = empty($attributes['textAlign']) ? '' : "has-text-align-{$attributes['textAlign']}";
			if ( isset( $attributes['level'] ) ) {
				$tag_name = 0 === $attributes['level'] ? 'p' : 'h' . $attributes['level'];
			}
			$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $align_class_name ) );
			return sprintf(
				'<%1$s %2$s>%3$s</%1$s>',
				$tag_name,
				$wrapper_attributes,
				$title,
			);
		}

		public function create_block_la_saphire_studio_blocks_block_init() {

			register_block_type_from_metadata( __DIR__ . '/build/meta-video' );
			register_block_type_from_metadata( __DIR__ . '/build/studio-list', array(
				'render_callback' => array( $this, 'ls_studio_list_render' ),
				'skip_inner_blocks' => true,
			) );
			register_block_type_from_metadata( __DIR__ . '/build/studio-title', array(
				'render_callback' => array( $this, 'ls_studio_title_render' ),
			) );
		}
	}
}

if(class_exists( 'LS_Studio_Blocks' ) ){
	register_activation_hook( __FILE__, array( 'LS_Studio_Blocks', 'activate' ) );
	register_deactivation_hook( __FILE__, array( 'LS_Studio_Blocks', 'deactivate' ) );
	register_uninstall_hook( __FILE__, array( 'LS_Studio_Blocks', 'uninstall' ) );
	$ls_studio_blocks = new LS_Studio_Blocks();
}