module.exports = {
	
	'env': {
		'node':true,
		'commonjs': true,
		'es2021': true
	},
	'plugins': [
        '@stylistic/js'
    ],
	'extends': 'eslint:recommended',
	'rules': {
		'eqeqeq': 'error',
		'no-trailing-spaces': 'error',
    	'object-curly-spacing': [
        	'error', 'always'
    	],
    	'arrow-spacing': [
        	'error', { 'before': true, 'after': true }
   		],
        '@stylistic/js/indent': [
            'error',
            2
        ],
        '@stylistic/js/linebreak-style': [
            'error',
            'unix'
        ],
        '@stylistic/js/quotes': [
            'error',
            'single'
        ],
        '@stylistic/js/semi': [
            'error',
            'never'
        ],
		'no-console': 0
    },
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
