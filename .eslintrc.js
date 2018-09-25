module.exports = {
	"extends": "airbnb",
	"plugins": [
		"react",
		"jsx-a11y",
		"import"
	],
	"rules": {
		"indent": ["error", "tab", {"SwitchCase": 1}],
		"no-console": ["error", { "allow": ["error"]}],
		"no-tabs": ["off"],
		"react/no-typos": ["off"],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"comma-dangle": ["off"],
		"import/extensions": ["off"],
		"jsx-a11y/href-no-hash": "off",
		"jsx-a11y/no-static-element-interactions": ["off"],
		"jsx-a11y/no-noninteractive-element-interactions": ["off"],
		"jsx-a11y/no-autofocus": ["off"],
		"jsx-a11y/click-events-have-key-events": ["off"],
		"import/no-unresolved": [2, {
			ignore: ['config']
		}],
		"import/no-extraneous-dependencies": "off",
		"comma-dangle": [1, "always-multiline"]
	},
	"globals": {
		"document": true,
		"config": true,
		"FileReader": true,
		"Image": true,
		"navigator": true,
		"window": true,
		"Blob": true,
	},
	"settings": {
		"import/ignore": ["config"]
	},
	"env": {
		"jasmine": true,
		"protractor": true,
		"jest": true,
	},
};
