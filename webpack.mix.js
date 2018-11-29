const mix = require('laravel-mix');

mix.setPublicPath('public');

mix.js('resources/js/app.js', 'public/js')
    .combine([
        'resources/js/resume.js',
        'resources/plugins/jquery-easing/jquery.easing.min.js',
    ],'public/js/plugin.js')
    .sass('resources/sass/style.scss', 'public/css')
    .browserSync('portfolio');

if (mix.inProduction()) {
    mix.version();
}
