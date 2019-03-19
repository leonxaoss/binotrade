const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        concat = require('gulp-concat-css'), // Об'єднання файлів
        cssnano = require('gulp-cssnano'), // мініфікація CSS
        uglify = require('gulp-uglify'), // зжимання js
        autoprefixer = require('gulp-autoprefixer'), // Автопрефіксер
        rename = require('gulp-rename'), // Переіменування файлів
        babel = require('gulp-babel'); // Бабель



gulp.task('sass', function () {
    return gulp.src('app/sass/full.scss') // Вибираємо файли
        .pipe(sass()) // Перетворення sass в css
        .pipe(rename({
            basename: "style"
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // .pipe(cssnano()) // Зжимаємо
        .pipe(gulp.dest('dist/css')) // Вигружаємо в папку app/css
});



gulp.task('js', function() {
    return gulp.src('app/js/script.js') // Вибираємо файли
        // .pipe(concat('script.min.js')) // Об'єднануэмо всі js файли
        // .pipe(uglify()) // Зжимаємо
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js')); // Выгружаємо в папку dist/js
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.scss', gulp.series('sass')); // Слідкуємо за змінами в файлах sass
    gulp.watch('app/js/**/*.js', gulp.series('js')); // Слідкуємо за змінами в файлах js
});