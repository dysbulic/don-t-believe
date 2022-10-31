import gulp from 'gulp'
import postcss from 'gulp-postcss'
import cssbeautify from 'gulp-cssbeautify'
import rename from 'gulp-rename'
import autoprefixer from 'autoprefixer'
import postcssNested from 'postcss-nested'
import zip from 'gulp-zip'

const styleFile = '*.postcss'

export const css = () => (
  gulp.src(styleFile)
  .pipe(postcss([autoprefixer, postcssNested]))
  .pipe(cssbeautify({ indent: '  ' }))
  .pipe(rename({ extname: '.css' }))
  .pipe(gulp.dest('.'))
)

export const watch = () => (
  gulp.watch([styleFile], css)
)

export const epub = () => (
  gulp.src(['**/*', '!.yarn/*', '!**/*.pdf', '!**/*.epub'])
  .pipe(zip('Joseph Nguyen — Don’t Believe Everything You Think.epub'))
  .pipe(gulp.dest('.'))
)

gulp.task('default', gulp.series(css, epub))
