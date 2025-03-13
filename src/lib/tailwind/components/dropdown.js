const dropdownComponent = (/** @type {any} */ theme) => {
	return {
		'.dropdown-menu-wrapper': {
			'@apply relative z-40': {},
			'.dropdown-backdrop': {
				'@apply fixed bottom-0 left-0 right-0 top-0 z-40': {}
			},
			'.dropdown-menu': {
				'@apply absolute z-50 min-w-[250px]': {},
				'.card-body': {
					'@apply overflow-y-auto': {}
				}
			}
		}
	};
};

module.exports = dropdownComponent;
