.eslintrc.json
```json
{
    "parser": "@typescript-eslint/parser",
    "env": {
        "node": false,
        "es6": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "@typescript-eslint"
    ],
    "ignorePatterns": [
        "**/*.less",
        "webpack/**",
        "**/*.html",
        "src/*.ico",
        "src/asset/**"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/no-typos": "error",
        "max-len": [
            "error",
            180
        ],
        "react/jsx-indent": [
            "error",
            4,
            {
                "indentLogicalExpressions": true
            }
        ],
        "max-classes-per-file": [
            "error"
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "one-var-declaration-per-line": [
            "error"
        ],
        "no-console": "warn",
        "no-prototype-builtins": "off",
        "semi": [
            "error",
            "always"
        ],
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "double"
        ],
        "block-spacing": [
            "error",
            "always"
        ],
        "space-before-blocks": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "no-duplicate-imports": "error",
        "no-var": "error",
        "require-await": "error",
        "computed-property-spacing": "error",
        "lines-between-class-members": "off",
        "key-spacing": "error",
        "no-nested-ternary": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxBOF": 1
            }
        ],
        "arrow-spacing": "error",
        "rest-spread-spacing": "error",
        "no-unneeded-ternary": "error",
        "eqeqeq": "error",
        "space-infix-ops": "error",
        "switch-colon-spacing": "error",
        "no-multi-spaces": "error",
        "array-bracket-spacing": "error",
        "comma-spacing": "error",
        "space-unary-ops": "error",
        "eol-last": "error",
        "lines-around-comment": "off",
        "class-methods-use-this": "off",
        "import/no-cycle": "off",
        "global-require": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "import/prefer-default-export": "off",
        "react/jsx-props-no-spreading": "off",
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true
            }
        ],
        "react/static-property-placement": [
            "error",
            "static public field",
            {
                "defaultProps": "static public field"
            }
        ],
        "linebreak-style": "off",
        "react/sort-comp": "off",
        "consistent-return": "off",
        "react/destructuring-assignment": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off"
    }
}
```

```bash
yarn add @typescript-eslint/eslint-plugin babel-eslint @typescript-eslint/parser prettier prettier-eslint eslint-config-prettier -D
```