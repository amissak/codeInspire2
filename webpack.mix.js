let mix = require('laravel-mix');

mix.setPublicPath('assets');
mix.js('src/js/app.js', 'assets');
mix.sass('src/scss/app.scss', 'assets');

