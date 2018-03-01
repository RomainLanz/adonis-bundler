# adonis-bundler

Adonis Bundler is the simpliest assets bundler you could ever found for an Adonis application.

It's based on [ParcelJS](https://parceljs.org/) which is a blazing fast, zero configuration web application bundler.

## Getting Started

This package should be installed with the Adonis CLI.

```shell
$ adonis install adonis-bundler
```

Then register the Service Provider within your `start/app.js` file.

```js
const providers = [
  'adonis-bundler/providers/BundlerProvider',
]
```

You are now ready to go!

## Bundle the assets

By default `adonis-bundler` look at files stored within your `resources/assets` folder and check for file with the pattern `*/app.*`. That means, all the file within your `resource/assets/XXX` folder named `app.XXX` will be bundled.

After creating your assets in the way you want (Less, SCSS, Stylus, ES2015, ...) you simply need to run the command below and the magic will happen.

```shell
$ adonis bundle
# adonis bundle --watch -> Watch for change
# adonis bundle --production -> Minify
```

ParcelJS will automaticaly download packages you need to compiles your assets and will then run them.

## Config

The config file is save as `config/bundle.js`. Make sure to tweak it as per your needs.

The bundler also check for `.babelrc`, `postcss.config.js` or whatever file your "language"/"transpiler" used by default to be configured to help you configure your assets the way you want.

## FAQ

**I want to do X and I cannot do it with this package**<br>
You maybe want to do something that is out of the scope of this package. Don't worry, you aren't obligated to use it. This main goal of this package is to provide an easy way to compile assets for 90% of developper. Nothing keeps you from installing Webpack and doing a custom configuration.

**Is ParcelJS's plugins working with this package**<br>
YES!

**How can I create an hash named compiled assets for production caching?**<br>
Unfortunately, you cannot for the moment. [Some discussions are going on in ParcelJS repository](https://github.com/parcel-bundler/parcel/issues/872) and hopefully this will be possible soon.
