import gulp from 'gulp'
import postcss from 'gulp-postcss'
import cssbeautify from 'gulp-cssbeautify'
import rename from 'gulp-rename'
import autoprefixer from 'autoprefixer'
import postcssNested from 'postcss-nested'

const styleFile = 'postcss.postcss'

export const css = () => (
  gulp.src(styleFile)
  .pipe(postcss([autoprefixer, postcssNested]))
  .pipe(cssbeautify({ indent: '  ' }))
  .pipe(rename({
    basename: 'css',
    extname: '.css',
  }))
  .pipe(gulp.dest('.'))
)

export const watch = () => (
  gulp.watch([styleFile], css)
)

gulp.task('default', gulp.series(css))
