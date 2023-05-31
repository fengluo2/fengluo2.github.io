'use strict';
/**
 * Replace Typora image path
 */

hexo.extend.filter.register('before_post_render', function (data) {
  let reg = RegExp('/' + data.slug + '/', "g")
  data.content = data.content.replace(reg, "/")
  return data;
})