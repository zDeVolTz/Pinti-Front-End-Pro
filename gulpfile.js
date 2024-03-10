import {deleteAsync} from 'del';
import { execSync } from 'child_process';
import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import csso from 'gulp-csso';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import htmlmin from 'gulp-htmlmin';
import ghpages from 'gh-pages';
import gulpGit from 'gulp-git';
import prompt from 'gulp-prompt';
import browserSync from 'browser-sync';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import obfuscate from 'gulp-javascript-obfuscator';
import terser  from 'gulp-terser';



const sass = gulpSass(dartSass);
const del = await deleteAsync;



gulp.task('css', () => {
   return gulp.src("app/css/*.css")
        .pipe(postcss([ autoprefixer() ]))
        .pipe(csso())
        .pipe(gulp.dest("dist/css"))
})

gulp.task('html', () => {
    return gulp.src('app/**/*.html')
        .pipe(htmlmin( { collapseWhitespace: true } ))
        .pipe(gulp.dest("dist"))
})

gulp.task('del', () => {
    return del("dist");
})

gulp.task('js', () => {
    return gulp.src('app/js/**/*.js')
        .pipe(obfuscate())
        .pipe(terser())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('copy', async () => {
    await gulp.src("app/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task('browserSync', () => {
    browserSync({
      server: {
        baseDir: 'app'
      },
      notify: false
    });
  });
  
  gulp.task('sass', () => {
    return gulp.src("app/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest('app/css')); 
})

gulp.task('clear', function() {
  return cache.clearAll();
});

gulp.task('img', function() {
  return gulp.src('app/img/**/*')
  .pipe(cache(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  })))
  .pipe(gulp.dest('dist/img'));
});

  gulp.task('watch', () => {
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/js/**/*.js').on("change", browserSync.reload);
    gulp.watch('app/**/*.html').on('change', browserSync.reload);
});
  
gulp.task("add", () => {
    return gulp.src(".")
    .pipe(gulpGit.add())
})

gulp.task("commit", () => {
    return gulp.src(".")
    .pipe(prompt.prompt({
        type: 'input',
        name: 'commitMessage',
        message: 'Введите комментарий для коммита:'
    }, function(res) {
        return gulp.src('.')
            .pipe(gulpGit.commit(res.commitMessage));
    }));
})


gulp.task("push", async (done) => {
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    await gulpGit.push('origin', branch, function(err) {
        if (err) {
            done(err);
        } else {
            done();
        }
    });
});

gulp.task("publishGitPage", () => {
    return new Promise((resolve, reject) => {
        ghpages.publish('app', function(err) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
})




gulp.task("gitPush", gulp.series("add","commit","push"))
gulp.task("build", gulp.series("del", "sass", "css", "html", "img", "js", "copy"))