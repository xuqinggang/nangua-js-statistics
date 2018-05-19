import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

export default {
    input: 'es/Statistics.ts',
    output: {
        file: 'dist/index.js',
        format: 'iife',
        name: 'Nangua',
    },
    plugins: [
        commonjs(),
        resolve(),
        typescript(),
    ],
};
