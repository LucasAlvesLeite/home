fitty('#choose-fitty a', { minSize: 15,  maxSize: 300, multiLine: false });
fitty('#choose-fitty2 h1', { minSize: 15,  maxSize: 300, multiLine: false });



$('.choose-post-name').each(function(){
    var me = $(this)
       , t = me.text().split(' ');
    me.html( '<b>'+t.shift()+'</b> '+t.join(' ') );
  });