export const loadFiles = (options = { name: '[name].[ext]' }) => {
  return {
    module: {
      rules: [
        {
          test: /\.(csv|doc?x|pdf|rtf|txt|xls?x)$/i,
          use: {
            loader: 'url-loader',
            options,
          },
        },
      ],
    },
  };
};
