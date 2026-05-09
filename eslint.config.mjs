import tseslint from 'typescript-eslint'

export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'public/**',
      'dist/**',
      'next-env.d.ts',
    ],
  },
  ...tseslint.configs.recommended,
  {
    files: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}', 'hooks/**/*.{ts,tsx}', 'lib/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
]