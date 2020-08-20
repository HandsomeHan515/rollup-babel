import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';

export default {
    input: './index.js',
    output: {
        format: 'cjs',
        name: 'babel',
        file: 'dist/bundle.js',
        sourcemap: false
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            babelHelpers: "runtime"
        }),
        serve({
            port: 3000,
            contentBase: '',
            openPage: '/index.html'
        }),
        replace({
            '__VERSION__': '0.0.1'
        })
    ]
}