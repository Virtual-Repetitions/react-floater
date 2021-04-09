import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import packageJSON from './package.json';

const plugins = () => [
  babel({
    exclude: 'node_modules/**',
  }),
  commonjs(),
];

export default {
  input: 'src/index.js',
  output: [{ file: 'lib/index.js', format: 'cjs',   intro: 'var global = typeof self !== undefined ? self : this;',
}, { file: 'es/index.js', format: 'es',   intro: 'var global = typeof self !== undefined ? self : this;'}],
  external: [
    ...Object.keys(packageJSON.peerDependencies),
    ...Object.keys(packageJSON.dependencies),
  ],
  plugins: [...plugins()],
};
