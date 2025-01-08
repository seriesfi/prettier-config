const prettierConfig = {
  semi: false,
  singleQuote: true,
  importOrder: [
    '^react$',
    '^react/(.*)$',
    // ohara-web
    '^next$',
    '^next/(.*)$',
    '^@/components/(.*)$',
    '^@/utils/(.*)$',
    '^@/api/(.*)$',
    // end ohara-web
    // ohara-mobile
    '^expo$',
    '^expo/(.*)$',
    // the following three import patterns were never used in ohara-mobile
    // "^@components/(.*)$",
    // "^@utilities/(.*)$",
    // "^@assets/(.*)$",
    // end ohara-mobile
    '<THIRD_PARTY_MODULES>',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderGroupNamespaceSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}

export default prettierConfig
