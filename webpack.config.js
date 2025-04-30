import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development', // or 'production'
    entry: './src/js/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // clean dist before build
    },
    module: {
        rules: [
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    alias: {
        "@": path.resolve(__dirname, "src"),
        "@css": path.resolve(__dirname, "src/css"),
        "@js": path.resolve(__dirname, "src/assets"),
    },

};
