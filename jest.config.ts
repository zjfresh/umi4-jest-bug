import { Config, configUmiAlias, createConfig } from '@umijs/max/test';

export default async () => {
  const config = createConfig({
    target: 'browser',
    jsTransformer: 'esbuild',
    // config opts for esbuild , it will pass to esbuild directly
    jsTransformerOpts: { jsx: 'automatic' },
  });
  return (await configUmiAlias({
    ...config,
    transform: {
      ...(config.transform || {}),
      '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        require.resolve('./file-transform'),
    },
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    collectCoverageFrom: [
      'src/**/*.{ts,js,tsx,jsx}',
      '!src/.umi/**',
      '!src/.umi-test/**',
      '!src/.umi-production/**',
    ],
    // if you require some es-module npm package, please uncomment below line and insert your package name
    transformIgnorePatterns: [
      'node_modules/(?!.*(lodash-es|@umijs/renderer-react|umi)/)',
    ],
  })) as Config.InitialOptions;
};
