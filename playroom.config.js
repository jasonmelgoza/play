module.exports = {
  components: './src/components/ui/index.ts',
  outputPath: './dist/playroom',
  frameComponent: './playroom/FrameComponent.tsx',
  title: 'Play UI Library',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  baseUrl: '/playroom/',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }],
                  '@babel/preset-typescript',
                ],
              },
            },
          ],
        },
        {
          test: /\.css?$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  }),
  iframeSandbox: 'allow-scripts',
};
