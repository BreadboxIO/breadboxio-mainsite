import HtmlWebpackPlugin from 'html-webpack-plugin';

export default ({title, template}) => {

    console.log('template: ', template);
    
    return {
        plugins: [
            new HtmlWebpackPlugin({
                title,
                template,
                minify: {
                    collapseInlineTagWhitespace: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true
                }
            })
        ]
    };
};
