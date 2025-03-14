// @ts-ignore
const defaultColors = (theme) => {
	return {
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
			},
			'.card': {
				borderColor: theme('colors.white'),
				color: theme('colors.white'),
				'.card-header': {
					backgroundColor: theme('colors.white'),
					color: theme('colors.black'),
					'.card-title': {
						color: theme('colors.black')
					}
				}
			},

			'.loading-spinner': {
				borderColor: theme('colors.gray.700'),
				borderTopColor: theme('colors.white')
			},

			'.table': {
				'.table-header': {
					'.table-header-cell': {
						color: theme('colors.white')
					},
					'.table-header-row': {
						borderColor: theme('colors.white')
					}
				},
				'.table-row': {
					borderColor: theme('colors.white'),
					'.table-row-cell': {
						color: theme('colors.white')
					}
				}
			},

			'.tabs-wrapper': {
				'.tabs': {
					borderColor: theme('colors.white'),
					'.tab': {
						backgroundColor: theme('colors.white'),
						borderColor: theme('colors.black'),
						color: theme('colors.black')
					}
				}
			},

			'.input': {
				borderColor: theme('colors.white'),
				color: theme('colors.white'),
				'&::placeholder': {
					color: theme('colors.gray.300')
				},
				option: {
					color: theme('colors.white'),
					backgroundColor: theme('colors.black')
				}
			},

			'.switch': {
				'.switch-input': {
					borderColor: theme('colors.white'),
					backgroundColor: theme('colors.black'),
					'&:checked': {
						backgroundColor: theme('colors.white')
					}
				},
				'.switch-label': {
					borderColor: theme('colors.white'),
					backgroundColor: theme('colors.black'),
					'&:before': {
						backgroundColor: theme('colors.white')
					}
				},
				'.switch-handle': {},
				'.switch-label-text': {
					color: theme('colors.white')
				}
			},

			'.toast-instance': {
				backgroundColor: theme('colors.black'),
				color: theme('colors.white'),
				borderColor: theme('colors.white')
			},

			'.dropdown-menu': {
				backgroundColor: theme('colors.black'),
				color: theme('colors.white'),
				borderColor: theme('colors.white')
			},

			'.confirmation-dialog': {
				'.confirmation-dialog-content': {
					backgroundColor: theme('colors.black'),
					borderColor: theme('colors.white'),
					color: theme('colors.white')
				}
			},

			'.alert': {
				borderColor: theme('colors.white'),
				backgroundColor: theme('colors.black'),
				color: theme('colors.white')
			}
		},

		'@media (prefers-color-scheme: light)': {
			'.btn': {
				color: theme('colors.black'),
				'&::before': {
					content: "''",
					border: '2px solid ' + theme('colors.black')
				},
				'&::after': {
					content: "''",
					boxShadow: '0 10px 0 0 ' + theme('colors.black')
				}
			},
			'.card': {
				borderColor: theme('colors.black'),
				color: theme('colors.white'),
				'.card-header': {
					backgroundColor: theme('colors.black'),
					color: theme('colors.white'),
					'.card-title': {
						color: theme('colors.white')
					}
				}
			},

			'.loading-spinner': {
				borderColor: theme('colors.gray.300'),
				borderTopColor: theme('colors.black')
			},

			'.table': {
				'.table-header': {
					'.table-header-cell': {
						color: theme('colors.black')
					},
					'.table-header-row': {
						borderColor: theme('colors.black')
					}
				},
				'.table-row': {
					borderColor: theme('colors.black'),
					'.table-row-cell': {
						color: theme('colors.black')
					}
				}
			},

			'.tabs-wrapper': {
				'.tabs': {
					borderColor: theme('colors.black'),
					'.tab': {
						backgroundColor: theme('colors.black'),
						borderColor: theme('colors.white'),
						color: theme('colors.white')
					}
				}
			},

			'.input': {
				borderColor: theme('colors.black'),
				color: theme('colors.black'),
				'&::placeholder': {
					color: theme('colors.gray.900')
				},
				option: {
					color: theme('colors.white'),
					backgroundColor: theme('colors.black')
				}
			},

			'.switch': {
				'.switch-input': {
					borderColor: theme('colors.black'),
					backgroundColor: theme('colors.white'),
					'&:checked': {
						backgroundColor: theme('colors.black')
					}
				},
				'.switch-label': {
					borderColor: theme('colors.black'),
					backgroundColor: theme('colors.white'),
					'&:before': {
						backgroundColor: theme('colors.black')
					}
				},
				'.switch-handle': {},
				'.switch-label-text': {
					color: theme('colors.black')
				}
			},

			'.toast-instance': {
				backgroundColor: theme('colors.white'),
				color: theme('colors.black'),
				borderColor: theme('colors.black')
			},

			'.dropdown-menu': {
				backgroundColor: theme('colors.white'),
				color: theme('colors.black'),
				borderColor: theme('colors.white')
			},

			'.confirmation-dialog': {
				'.confirmation-dialog-content': {
					backgroundColor: theme('colors.white'),
					borderColor: theme('colors.black'),
					color: theme('colors.black')
				}
			},

			'.alert': {
				borderColor: theme('colors.black'),
				backgroundColor: theme('colors.white'),
				color: theme('colors.black')
			}
		}
	};
};

module.exports = defaultColors;
