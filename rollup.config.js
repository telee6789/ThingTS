import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from "rollup-plugin-serve";
import livereload from 'rollup-plugin-livereload';
import { uglify } from 'rollup-plugin-uglify';
import rollupTypescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';
import fs from 'fs';

const debug = process.env.NODE_ENV === 'development' ? true : false;
const combineFiles = [
    './node_modules/three/build/three.js',
    './node_modules/three/examples/js/loaders/GLTFLoader.js',
    './node_modules/@tweenjs/tween.js/src/Tween.js'
];
var banner = '';
for (let file of combineFiles) {
    banner += fs.readFileSync(file, { encoding: 'utf-8' });
}

export default {
    input: './src/Index.ts',
    external: ['three', '@tweenjs/tween.js'],
    onwarn: warning => { if (warning.code == 'PLUGIN_WARNING') return; },
    output: {
        file: './build/thing.js',
        format: 'umd',
        name: 'THING',
        sourcemap: debug,
        banner: banner,
        globals: {
            'three': 'THREE',
            '@tweenjs/tween.js': 'TWEEN'
        }
    },
    plugins: [
        rollupTypescript(),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        babel({
            exclude: './node_modules/**',
            runtimeHelpers: true,
            babelrc: false,
            presets: [
                ['@babel/preset-env', { modules: false }]
            ]
        }),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        (!debug && uglify()),
        (debug && serve({
            open: true,
            verbose: false,
            contentBase: './',
            host: '0.0.0.0',
            port: 80
        })),
        (debug && livereload({
            watch: './build',
            verbose: false
        }))
    ]
}