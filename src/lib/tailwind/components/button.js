/**
 * @param {any} theme
 */
/**
 * @param {any} theme
 */
const buttonComponent = (theme) => ({
	'.btn': {
		position: 'relative',
		isolation: 'isolate',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '4rem',
		minWidth: '4rem',
		border: 'none',
		padding: '0 2rem',
		paddingBottom: '0.5rem',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: theme('colors.black'),
		cursor: 'pointer',
		borderRadius: '0.75rem',

		'&.btn-sm': {
			height: '2.5rem',
			minWidth: '2.5rem',
			padding: '0 1rem',
			paddingBottom: '0.25rem',
			fontSize: '0.875rem',
			borderRadius: '0.5rem',

			'&::before': {
				borderRadius: '0.5rem'
			},

			'&::after': {
				bottom: '6px',
				borderRadius: '0.5rem'
			},

			'&:active': {
				paddingBottom: '0',
				paddingTop: '0.25rem'
			},

			'&:active::before': {
				top: '6px'
			}
		},

		'&::before': {
			content: '""',
			position: 'absolute',
			inset: '0',
			zIndex: '-20',
			borderRadius: '0.75rem',
			border: '2px solid ' + theme('colors.black')
		},

		'&::after': {
			content: '""',
			position: 'absolute',
			left: '0',
			right: '0',
			top: '0',
			bottom: '10px',
			zIndex: '-10',
			borderRadius: '0.75rem',
			boxShadow: '0 10px 0 0 ' + theme('colors.black')
		},

		'&:active': {
			paddingBottom: '0',
			paddingTop: '0.5rem'
		},

		'&:active::before': {
			top: '10px'
		},

		'&:active::after': {
			boxShadow: 'none !important'
		},

		// Generate button variants for each color
		...Object.keys(theme('colors')).reduce(
			(acc, color) => {
				// Skip special colors
				if (typeof theme(`colors.${color}`) === 'object') {
					// @ts-ignore
					acc[`&.btn-${color}`] = {
						color: `var(--color-${color}-contrast)`,
						'&::before': {
							border: `2px solid var(--color-${color}-light)`,
							backgroundColor: `var(--color-${color})`
						},
						'&::after': {
							boxShadow: `0 10px 0 0 var(--color-${color}-light)`
						},
						'&:hover': {
							'&::before': {
								backgroundColor: `var(--color-${color}-dark)`
							}
						},
						'&:disabled': {
							opacity: '0.5',
							cursor: 'not-allowed',
							'&:hover': {
								'&::before': {
									backgroundColor: `var(--color-${color})`
								}
							}
						}
					};
				}
				return acc;
			},
			{
				// Default white button
				'&.btn-white': {
					color: 'var(--color-white-contrast)',
					'&::before': {
						border: '2px solid var(--color-white-light)',
						backgroundColor: 'var(--color-white)'
					},
					'&::after': {
						boxShadow: '0 10px 0 0 var(--color-white-light)'
					},
					'&:hover': {
						'&::before': {
							backgroundColor: 'var(--color-white-dark)'
						}
					}
				}
			}
		)
	},

	'@media (prefers-color-scheme: dark)': {
		'.btn': {
			color: theme('colors.white'),
			'&::before': {
				content: "''",
				border: '2px solid ' + theme('colors.white')
			},
			'&::after': {
				content: "''",
				boxShadow: '0 10px 0 0 ' + theme('colors.white')
			}
		}
	}
});

module.exports = buttonComponent;
