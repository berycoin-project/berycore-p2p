'use strict';

var gulp = require('gulp');
var berycoreTasks = require('berycore-build');

berycoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
