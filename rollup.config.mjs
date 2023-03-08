import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg'

export default {
    input: 'src/components/index.ts',
    output: [
        
        {
            dir: 'dist/cjs',
            format: 'cjs',
            sourcemap: true,
            name: 'react-lib'
        },
        {
            format: 'esm',
            dir: 'dist/esm',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss(),
        terser(),
        svg()
    ]
}