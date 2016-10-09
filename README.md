# eslint-config-pouloum


[![npm](https://img.shields.io/npm/v/eslint-config-pouloum.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-pouloum)
[![GitHub license](https://img.shields.io/github/license/5im0n/eslint-config-pouloum.svg?style=flat-square)]()
[![peerDependency Status](https://david-dm.org/5im0n/eslint-config-pouloum/peer-status.svg?style=flat-square)](https://david-dm.org/5im0n/eslint-config-pouloum#info=peerDependencies)
[![Travis](https://img.shields.io/travis/5im0n/eslint-config-pouloum/master.svg?style=flat-square)](https://travis-ci.org/5im0n/eslint-config-pouloum)
[![Code Climate](https://img.shields.io/codeclimate/github/5im0n/eslint-config-pouloum.svg?style=flat-square)](https://codeclimate.com/github/5im0n/eslint-config-pouloum)

A set of configurable [ESLint][1] configurations for **meticulous people**.
*Inspire by [Meetic][4] configuration*



## Installation

You have to install ESLint first and the configuration package

```bash
$ npm install --save-dev eslint eslint-config-pouloum
```

Install it globally if you want to use this configuration from [command-line](#commande-line-use).

```bash
$ npm i -g eslint eslint-config-pouloum
```

If you use ESLint v2.X please install the last configuration that suits the previous major version

```bash
$ npm i -g eslint eslint-config-pouloum@2.2.0
```


## Usage

This set of configs is meant to be extended on a per-project basis as necessary
using ESLint's [shareable configs][2].


- Add the extends attribute to your `.eslintrc`

```json
{
  "extends": "pouloum"
}
```

- Or to the `eslintConfig` field of the `package.json` of your project

```json
{
  "name": "your-project-name",
  "eslintConfig": {
    "extends": "pouloum"
  }
}
```

<a name="commande-line-use"></a>

- You can also use it from command line 

```bash
$ eslint -c pouloum *.js
```

### Override

If the default configurations does not suit you, you can easily override it.
Consult the ESLint documentation for more information about [extending configuration files][5].

```js
{
  "extends": "pouloum",
  // Override rule comes heres
  "rules": {
    "no-magic-numbers": 0
  }
}
```



## Available configurations

This package includes the following configurations:


### Standalone

#### ES6 (default)

If your project is written in ECMAScript-6, you can extend with the ES6 subset of configuration.

- extends the `ES5` configuration
- set `sourceType` to module
- add rules related to `ES6` (`arrowFunctions`, `classes`...)
- enable all `ecmaFeatures` expect `jsx`
- overrides some rules (`no-underscore-dangle`...)

```json
{
  "extends": [
    "pouloum/configurations/es6"
  ]
}
```

#### ES5 

This is a collection of [rules][6] regarding possible errors, best practices, strict mode, variables and stylistic issues.
> This configuration enforces neither `env` nor `globals` settings. You may have to set individually on your project

```json
{
  "extends": "pouloum"
}
```


### Extended

> Extended configurations can't be used on its own.

#### Browser

- add the `browser` environment
- overrides some rules (`no-console`...)

```json
{
  "extends": [
    "pouloum",
    "pouloum/configurations/browser"
  ]
}
```

#### Server

- adds rules related to Node.js (`no-mixed-requires`, `no-process-exit`...)
- add the `node` environment
- overrides some rules (`no-console`, ...)

```json
{
  "extends": [
    "pouloum/configurations/es6",
    "pouloum/configurations/server"
  ]
}
```

#### Angular

This configuration is base on the [ESLint angular plugin][7] therefore you have to install it before using this configuration:

```bash
$ npm install --save-dev eslint-plugin-angular
```

- collection of [rules][8] regarding possible errors, best practices, naming, deprecated features, conventions and wrappers
- extends the `browser` configuration

```json
{
  "extends": [
    "pouloum",
    "pouloum/configurations/angular"
  ]
}
```



## License

The [MIT License][3] (MIT)


[1]: http://eslint.org/
[2]: http://eslint.org/docs/developer-guide/shareable-configs
[3]: https://opensource.org/licenses/MIT
[4]: https://github.com/Meetic/eslint-config-meetic
[5]: http://eslint.org/docs/user-guide/configuring#extending-configuration-files
[6]: http://eslint.org/docs/rules/
[7]: https://www.npmjs.com/package/eslint-plugin-angular
[8]: https://www.npmjs.com/package/eslint-plugin-angular#rules
