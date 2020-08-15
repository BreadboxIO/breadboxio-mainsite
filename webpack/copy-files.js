import CopyWebpackPlugin from 'copy-webpack-plugin';

export const copyFiles = ({ from, to }) => {
  return {
    plugins: [
      new CopyWebpackPlugin([
        {
          from,
          to,
        },
      ]),
    ],
  };
};
