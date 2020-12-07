require("dotenv").config();

module.exports = {
    env: {
        GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API
    }, 
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        })
        return config;
    }
}