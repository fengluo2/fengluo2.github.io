'use strict';
/**
 * Replace Post url
 */

var slugify = require('transliteration').slugify;

hexo.extend.filter.register('post_permalink', function (data) {
  // https://github.com/andyhu/transliteration#slugifystr-options
  const options = Object.assign({ ignore: ['/', '.'] })
  return slugify(data, options);
})