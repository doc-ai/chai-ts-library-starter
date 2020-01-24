module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
      "@typescript-eslint",
      "@typescript-eslint/tslint",
      "functional"
    ],
  "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/indent": [
            "error",
            2,
            {
                "CallExpression": {
                    "arguments": "first"
                },
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                }
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "no-param-reassign": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/semi": [
            "off",
            "always"
        ],
        "@typescript-eslint/space-within-parens": [
            "off",
            "never"
        ],
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "camelcase": "error",
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "complexity": "off",
        "constructor-super": "error",
        "curly": [
            "error",
            "multi-line"
        ],
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "linebreak-style": "off",
        "max-classes-per-file": [
            "error",
            1
        ],
        "max-len": [
            "error",
            {
                "code": 100
            }
        ],
        "new-parens": "error",
        "newline-per-chained-call": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "off",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-duplicate-imports": "error",
        "no-empty": "off",
        "no-eval": "error",
        "no-extra-semi": "off",
        "no-fallthrough": "off",
        "no-invalid-regexp": "error",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "off",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-return-await": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "radix": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never"
            }
        ],
        "spaced-comment": "error",
        "use-isnan": "error",
        "valid-typeof": "off",
        "@typescript-eslint/tslint/config": [
            "error",
          {
                "rules": {
                    "array-bracket-spacing": [
                        true,
                        "never"
                    ],
                    "block-spacing": true,
                    "brace-style": [
                        true,
                        "1tbs",
                        {
                            "allowSingleLine": true
                        }
                    ],
                    "function-name": [
                        true,
                        {
                            "function-regex": {},
                            "method-regex": {},
                            "private-method-regex": {},
                            "protected-method-regex": {},
                            "static-method-regex": {}
                        }
                    ],
                    "handle-callback-err": [
                        true,
                        "^(err|error)$"
                    ],
                    "import-name": true,
                    "jsdoc-format": true,
                    "no-boolean-literal-compare": true,
                    "no-class": true,
                    "no-duplicate-case": true,
                    "no-else-after-return": true,
                    "no-empty-character-class": true,
                    "no-ex-assign": true,
                    "no-expression-statement": [
                        true,
                        {
                            "ignore-prefix": [
                                "console.",
                                "process.exit"
                            ]
                        }
                    ],
                    "no-extra-boolean-cast": true,
                    "no-function-constructor-with-string-args": true,
                    "no-increment-decrement": true,
                    "no-inner-declarations": [
                        true,
                        "functions"
                    ],
                    "no-mixed-interface": true,
                    "no-reference-import": true,
                    "no-this": true,
                    "no-unexpected-multiline": true,
                    "object-curly-spacing": [
                        true,
                        "always"
                    ],
                    "object-shorthand-properties-first": true,
                    "prefer-array-literal": true,
                    "space-in-parens": [
                        true,
                        "never"
                    ],
                    "strict-type-predicates": true,
                    "ter-arrow-parens": [
                        true,
                        "as-needed",
                        {
                            "requireForBlockBody": true
                        }
                    ],
                    "ter-computed-property-spacing": true,
                    "ter-func-call-spacing": true,
                    "ter-indent": [
                        true,
                        2,
                        {
                            "SwitchCase": 1
                        }
                    ],
                    "ter-no-sparse-arrays": true,
                    "ter-prefer-arrow-callback": true,
                    "valid-typeof": true,
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-preblock",
                        "check-separator"
                    ]
                }
            }
        ]
    }
};
