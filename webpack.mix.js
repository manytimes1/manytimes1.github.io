const mix = require('laravel-mix');

mix.setPublicPath('public');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/style.scss', 'public/css')
    .browserSync('portfolio');

if (mix.inProduction()) {
    mix.version();
}
