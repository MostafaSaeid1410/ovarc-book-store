/** @type {import('stylelint').Config} */
export default {
    extends: [
        "stylelint-config-standard-scss", // Provides comprehensive SCSS rules and modern CSS best practices
        "stylelint-config-clean-order", // Implements logical property ordering (like positioning, layout, typography)
        "stylelint-config-html", // Adds support for linting CSS/SCSS in HTML and component files
    ],
    plugins: [
        "stylelint-scss", // Adds enhanced SCSS-specific functionality and rules
        "stylelint-declaration-strict-value", // Enforces the use of CSS variables for consistent theming
    ],
    rules: {
        "selector-class-pattern":
            "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*(?:--[a-z0-9]+)?$", // This regex pattern enforces kebab-case for class names and bem modifier pattern naming

        /* Prevents unnecessary use of the & parent selector in SCSS
         Bad:  .parent { & .child {} }
         Good: .parent { .child {} } */
        "scss/selector-no-redundant-nesting-selector": true,

        /* Limits nesting depth to 3 levels to prevent overly specific selectors
         This helps maintain cleaner, more maintainable CSS */
        "at-rule-empty-line-before": [
            "always",
            {
                except: ["blockless-after-same-name-blockless", "first-nested"],
                ignore: ["after-comment"],
                ignoreAtRules: ["else"], // Ignore 'else' to prevent unwanted newlines
            },
        ],
        "scss/at-else-empty-line-before": "never",
        "custom-property-pattern": null, // Allow for none kebab case in css variables naming
        "declaration-block-no-duplicate-properties": true, // Error in duplication of properties

        "scss/operator-no-newline-after": null,
        /* disables the rule that would otherwise prevent newlines after operators in SCSS example calc(10px
        +
        10px ) this will give error and we need the ability to format the file*/
        "selector-pseudo-class-no-unknown": null, // allow for Any pseudo-classes such as :global, :local etc..
        // allow nesting depth levels
        "max-nesting-depth": null,
    },
    ignoreFiles: [
        "**/*.js",
        "**/*.cjs",
        "**/*.jsx",
        "**/*.ts",
        "**/*.tsx",
        "**/*.json",
        "**/*.md",
        "**/*.html",
        "node_modules/**",
        "plop-templates/**",
        "dist/**",
        "**/*.png",
        "**/*.jpg",
        "**/*.jpeg",
        "**/*.gif",
        "**/*.svg",
    ],
};
