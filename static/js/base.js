var $code_example_js = $('.code_example_js'),
txt = $code_example_js.data("text"),
tot = txt.length,
ch  = 0;

(function typeIt() {   
    if(ch > tot) return;
    $code_example_js.text( txt.substring(0, ch++) );
    setTimeout(typeIt, ~~(Math.random()*(30-10+1)+10));
}());