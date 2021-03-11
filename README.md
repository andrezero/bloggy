# Bloggy is a fake HTML+CSS+JS page

> A simple exercise to help me evaluate the DX of using webpack and friends to create a static HTML+CSS+JS page. **tl;dr:** it's quite nice.

## WARNING(s)

1. This code is not actively maintained.
1. This is a POC, not a boilerplate.

## How to use

```
npm install
npm start
```

## TODO

- a11y
- load more bikes
- skip to content
- cypress test

## Developing

**Under the hood:**

- dependencies:
  - [@andrezero/slidy](https://github.com/andrezero/slidy)
- browserslist
- webpack
  - babel-loader
  - sass-loader + postcss-loader + css-loader + style-loader
  - svg-inline-loader
  - terser-webpack-plugin
  - mini-css-extract-plugin
  - html-webpack-plugin
- babel
  - preset-env
  - plugin-proposal-class-properties
- css
  - sass
  - postcss + postcss-preset-env
- linting
  - prettier
  - eslint + @babel/eslint-parser + eslint-standard + eslint-prettier

### Scripts

- `npm run start` - runs webpack + server (dev config)
- `npm run dev` - runs webpack + tests in watch mode (dev config)
- `npm run docs` - runs http-server docs
- `npm run build` - runs webpack (production config)

## MIT License

Copyright (c) 2021 andrezero http://andrezero.mit-license.org/2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Developer’s Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or

(b) The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or

(c) The contribution was provided directly to me by some other person who certified (a), (b) or (c) and I have not modified it.

(d) I understand and agree that this project and the contribution are public and that a record of the contribution (including all personal information I submit with it, including my sign-off) is maintained indefinitely and may be redistributed consistent with this project or the open source license(s) involved.
