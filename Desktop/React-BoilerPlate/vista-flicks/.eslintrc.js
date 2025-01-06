module.exports = {
    parser: '@typescript-eslint/parser',
    
    extends: [
      'eslint:recommended', 
      'plugin:@typescript-eslint/recommended',
    ],
  
    plugins: ['@typescript-eslint'],
  
    env: {
      node: true,
      es6: true,
      browser: true,
    },
  
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: false },
      ],
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      
      'no-await-in-loop': 'error',
      'array-callback-return': 'error',
      'no-duplicate-imports': 'error',
      'no-constant-binary-expression': 'error',
      'no-constructor-return': 'error',
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-unused-vars': ['error', { args: 'none' }],
      'no-unused-private-class-members': 'error',
      'no-use-before-define': 'error',
      'require-atomic-updates': 'error',
      'no-console': 'warn',
      
      'arrow-body-style': ['error', 'as-needed'],
      'accessor-pairs': 'error',
      'block-scoped-var': 'error',
      curly: ['error', 'multi', 'consistent'],
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': ['error'],
      'dot-notation': 'error',
      eqeqeq: ['error', 'smart'],
      'func-name-matching': 'error',
      camelcase: [
        'error',
        {
          properties: 'always',
          ignoreDestructuring: true,
          ignoreImports: true,
          ignoreGlobals: true,
        },
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
        },
      ],
      quotes: ['error', 'single'],
    },
  
    parserOptions: {
      ecmaVersion: 2020, 
      sourceType: 'module', 
    },
  
    overrides: [
      {
        files: ['*.ts', '*.tsx'], 
        rules: {
          '@typescript-eslint/explicit-module-boundary-types': 'off', 
        },
      },
    ],
  };
  