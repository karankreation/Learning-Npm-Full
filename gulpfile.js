import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import sass from 'gulp-sass';


function compileSass(done){
        return gulp.src('./sass/**/*.scss') //grab every image in image folder
        .pipe(sass().on('error', sass.logError)) //run all our sass files through compiler
        .pipe(gulp.dest('./css')); //save the compiles css file in its directory

        done();
}

function squashImages(done){
    gulp.src('images/*') //grab every image in image folder
	.pipe(imagemin()) // run image through imagemin engine
	.pipe(gulp.dest('images/dist')) // put the optimised image here

        done();
}

function sayHi(done){
        console.log('hello from gulp! easy peasy!');

        done(); 
}
        
export { sayHi as hello,
         squashImages as crunch,
         compileSass as compile       
        }