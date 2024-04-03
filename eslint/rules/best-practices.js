module.exports = {
  rules: {
    /**
     * Enforce that callback functions used in array methods return a value or have an explicit return statement.
     *
     * This rule allows implicit returns (e.g., in arrow functions or single-line functions without braces).
     *
     * Reference: https://eslint.org/docs/rules/array-callback-return
     *
     * ❗️ This rule is not fixable.
     */
    'array-callback-return': ['error', { allowImplicit: true }],

    /**
     * Treat variable declarations with 'var' as if they were block-scoped.
     *
     * This means that variables declared with 'var' inside a block (e.g., if, for, function) are treated as if they were declared at the top of the enclosing scope.
     *
     * Reference: https://eslint.org/docs/rules/block-scoped-var
     *
     * ❗️ This rule is not fixable.
     */
    'block-scoped-var': 'error',

    /**
     * Require curly braces for multiline blocks.
     *
     * This rule enforces the use of curly braces for multiline blocks, such as if, else, for, while, and do...while statements.
     *
     * Reference: https://eslint.org/docs/rules/curly
     *
     * ✅ This rule is fixable.
     */
    curly: ['warn', 'multi-line'],

    /**
     * Require the default clause in switch statements to be the last case.
     *
     * This rule enforces that the default clause in switch statements is the last case, to avoid potential confusion and bugs.
     *
     * Reference: https://eslint.org/docs/rules/default-case-last
     *
     * ❗️ This rule is not fixable.
     */
    'default-case-last': 'error',

    /**
     * Require the use of strict equality operators ('===' and '!==') instead of loose equality operators ('==' and '!=').
     *
     * This rule helps prevent accidental type coercion and potential bugs.
     *
     * Reference: https://eslint.org/docs/rules/eqeqeq
     *
     * ✅ This rule is fixable.
     */
    eqeqeq: 'error',

    /**
     * Require grouped accessor pairs in object literals and classes.
     *
     * This rule enforces that object literals and classes group their accessor pairs (getter/setter pairs) together.
     *
     * Reference: https://eslint.org/docs/rules/grouped-accessor-pairs
     *
     * ❗️ This rule is not fixable.
     */
    'grouped-accessor-pairs': 'error',

    /**
     * Disallow the use of the 'alert()' function.
     *
     * The 'alert()' function is primarily used for debugging purposes and should be avoided in production code.
     *
     * Reference: https://eslint.org/docs/rules/no-alert
     *
     * ❗️ This rule is not fixable.
     */
    'no-alert': 'error',

    /**
     * Disallow the use of the 'caller' and 'callee' properties.
     *
     * These properties are deprecated and their use can lead to potential security issues and performance problems.
     *
     * Reference: https://eslint.org/docs/rules/no-caller
     *
     * ❗️ This rule is not fixable.
     */
    'no-caller': 'error',

    /**
     * Disallow returning a value from a constructor function.
     *
     * Constructors should not return values explicitly, as they are meant to be used with the 'new' keyword.
     *
     * Reference: https://eslint.org/docs/rules/no-constructor-return
     *
     * ❗️ This rule is not fixable.
     */
    'no-constructor-return': 'error',

    /**
     * Disallow unnecessary 'else' blocks after 'return' statements in 'if' blocks.
     *
     * If an 'if' block has a 'return' statement, the 'else' block becomes unreachable and should be removed.
     *
     * Reference: https://eslint.org/docs/rules/no-else-return
     *
     * ✅ This rule is fixable.
     */
    'no-else-return': 'warn',

    /**
     * Disallow the use of the 'eval()' function.
     *
     * The 'eval()' function can be a potential security risk and should be avoided in most cases.
     *
     * Reference: https://eslint.org/docs/rules/no-eval
     *
     * ❗️ This rule is not fixable.
     */
    'no-eval': 'error',

    /**
     * Disallow extending native objects.
     *
     * Extending native objects can lead to unexpected behavior and compatibility issues.
     *
     * Reference: https://eslint.org/docs/rules/no-extend-native
     *
     * ❗️ This rule is not fixable.
     */
    'no-extend-native': 'error',

    /**
     * Disallow unnecessary function binding.
     *
     * This rule flags instances where a function is bound to an object context unnecessarily.
     *
     * Reference: https://eslint.org/docs/rules/no-extra-bind
     *
     * ✅ This rule is fixable.
     */
    'no-extra-bind': 'error',

    /**
     * Disallow unnecessary labels.
     *
     * Labels should be used sparingly and only when necessary, as they can make code harder to read and maintain.
     *
     * Reference: https://eslint.org/docs/rules/no-extra-label
     *
     * ✅ This rule is fixable.
     */
    'no-extra-label': 'error',

    /**
     * Disallow floating decimal literals that start with a leading decimal point.
     *
     * This rule enforces that numeric literals with decimals start with a leading zero.
     *
     * Reference: https://eslint.org/docs/rules/no-floating-decimal
     *
     * ✅ This rule is fixable.
     */
    'no-floating-decimal': 'error',

    /**
     * Require explicit type conversions instead of implicit coercion.
     *
     * This rule disallows the use of double logical negation (!!) for boolean conversions and prefers the use of explicit methods like Boolean().
     *
     * Reference: https://eslint.org/docs/rules/no-implicit-coercion
     *
     * ✅ This rule is partially fixable.
     */
    'no-implicit-coercion': 'error',

    /**
     * Disallow the use of eval()-like methods.
     *
     * Reference: https://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': 'error',

    /**
     * Disallow the usage of the '__iterator__' property.
     *
     * The '__iterator__' property is a deprecated legacy feature and should not be used in modern code.
     *
     * Reference: https://eslint.org/docs/rules/no-iterator
     *
     * ❗️ This rule is not fixable.
     */
    'no-iterator': 'error',

    /**
     * Disallow the use of labels, except for loop statements and switch statements.
     *
     * Labels should be used sparingly, as they can make code harder to read and maintain.
     *
     * Reference: https://eslint.org/docs/rules/no-labels
     *
     * ❗️ This rule is not fixable.
     */
    'no-labels': ['error'],

    /**
     * Disallow unnecessary nested blocks.
     *
     * Nested blocks that are not necessary can make code harder to read and maintain.
     *
     * Reference: https://eslint.org/docs/rules/no-lone-blocks
     *
     * ❗️ This rule is not fixable.
     */
    'no-lone-blocks': 'error',

    /**
     * Disallow constructor functions with no return value or side effects.
     *
     * Using 'new' with a constructor function that doesn't return an object or have side effects is a common mistake.
     *
     * Reference: https://eslint.org/docs/rules/no-new
     *
     * ❗️ This rule is not fixable.
     */
    'no-new': 'error',

    /**
     * Disallow the use of the Function constructor.
     *
     * The Function constructor is a potential security risk and should be avoided in most cases.
     *
     * Reference: https://eslint.org/docs/rules/no-new-func
     *
     * ❗️ This rule is not fixable.
     */
    'no-new-func': 'error',

    /**
     * Disallow the use of primitive wrapper instances.
     *
     * Using wrapper instances like 'new String()' is unnecessary and can lead to performance issues.
     *
     * Reference: https://eslint.org/docs/rules/no-new-wrappers
     *
     * ❗️ This rule is not fixable.
     */
    'no-new-wrappers': 'error',

    /**
     * Disallow the use of octal escape sequences in string literals.
     *
     * Octal escape sequences can be confusing and lead to unintended behavior.
     *
     * Reference: https://eslint.org/docs/rules/no-octal-escape
     *
     * ❗️ This rule is not fixable.
     */
    'no-octal-escape': 'error',

    /**
     * Disallow reassigning function parameters.
     *
     * Reassigning function parameters can lead to unexpected behavior and make code harder to reason about.
     *
     * Reference: https://eslint.org/docs/rules/no-param-reassign
     *
     * ❗️ This rule is not fixable.
     */
    'no-param-reassign': 'error',

    /**
     * Disallow the use of the deprecated '__proto__' property.
     *
     * The '__proto__' property is deprecated and should be avoided in favor of Object.getPrototypeOf() and Object.setPrototypeOf().
     *
     * Reference: https://eslint.org/docs/rules/no-proto
     *
     * ❗️ This rule is not fixable.
     */
    'no-proto': 'error',

    /**
     * Disallow assignment operators in return statements.
     *
     * Assigning values in return statements can lead to unexpected behavior and make code harder to understand.
     *
     * Reference: https://eslint.org/docs/rules/no-return-assign
     *
     * ❗️ This rule is not fixable.
     */
    'no-return-assign': 'error',

    /**
     * Disallow the use of 'javascript:' URLs.
     *
     * 'javascript:' URLs are a potential security risk and should be avoided in most cases.
     *
     * Reference: https://eslint.org/docs/rules/no-script-url
     *
     * ❗️ This rule is not fixable.
     */
    'no-script-url': 'error',

    /**
     * Disallow comparisons where both sides are exactly the same value.
     *
     * Self-comparisons like 'x === x' are redundant and can indicate a potential logic error.
     *
     * Reference: https://eslint.org/docs/rules/no-self-compare
     *
     * ❗️ This rule is not fixable.
     */
    'no-self-compare': 'error',

    /**
     * Disallow the use of the comma operator.
     *
     * The comma operator is often used in an ambiguous way and can lead to coding mistakes or errors.
     *
     * Reference: https://eslint.org/docs/rules/no-sequences
     *
     * ❗️ This rule is not fixable.
     */
    'no-sequences': 'error',

    /**
     * Disallow unnecessary use of the 'call()' and 'apply()' methods.
     *
     * These methods should only be used when their functional behavior is necessary.
     *
     * Reference: https://eslint.org/docs/rules/no-useless-call
     *
     * ❗️ This rule is not fixable.
     */
    'no-useless-call': 'error',

    /**
     * Disallow unnecessary string concatenation.
     *
     * Reference: https://eslint.org/docs/rules/no-useless-concat
     *
     * ❗️ This rule is not fixable.
     */
    'no-useless-concat': 'error',

    /**
     * Disallow redundant return statements in functions and methods.
     *
     * A return statement at the end of a function or method is redundant and can be safely removed.
     *
     * Reference: https://eslint.org/docs/rules/no-useless-return
     *
     * ✅ This rule is fixable.
     */
    'no-useless-return': 'warn',

    /**
     * Require using named capture groups in regular expressions.
     *
     * Named capture groups improve the readability and maintainability of regular expressions.
     *
     * Reference: https://eslint.org/docs/rules/prefer-named-capture-group
     *
     * ❗️ This rule is not fixable.
     */
    'prefer-named-capture-group': 'error',

    /**
     * Require using Error objects as Promise rejection reasons.
     *
     * Rejecting Promises with Error objects provides better error handling and debugging capabilities.
     *
     * This rule allows for empty rejections (e.g., Promise.reject()) for specific use cases.
     *
     * Reference: https://eslint.org/docs/rules/prefer-promise-reject-errors
     *
     * ❗️ This rule is not fixable.
     */
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    /**
     * Disallow the use of the RegExp constructor in favor of regular expression literals.
     *
     * Regular expression literals are more concise and have better performance than using the RegExp constructor.
     *
     * Reference: https://eslint.org/docs/rules/prefer-regex-literals
     *
     * ❗️ This rule is not fixable.
     */
    'prefer-regex-literals': 'error',

    /**
     * Disallow "Yoda conditions" (literal value on the left side of a comparison).
     *
     * Yoda conditions can be harder to read and can lead to potential logical errors.
     *
     * Reference: https://eslint.org/docs/rules/yoda
     *
     * ✅ This rule is fixable.
     */
    yoda: 'warn',
  },
};
