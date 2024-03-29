/**
* WordPress dependencies
*/
import { __ } from '@wordpress/i18n'

/**
 * Render Help link
*/

const GiveHelpLink = () => {
	return (
		<p className="give-blank-slate__help">
			Need help? Get started with <a href="http://docs.#.com/give101/" target="_blank" rel="noopener noreferrer">{ __( 'Best Donation 101' ) }</a>
		</p>
	);
};

export default GiveHelpLink;
