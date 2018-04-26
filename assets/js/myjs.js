
//TOPの背景画像をスクロール時にカーテンのように移動させる
if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
    jQuery(function($){
        var $window = $(window);

        $('header').each(function(index) {
            var $self = $(this);
            var offsetPositions = $self.offset();

            $(window).scroll(function() {
                // この領域がブラウザに表示されている場合
                if (($window.scrollTop() + $window.height()) > offsetPositions.top && ((offsetPositions.top + $self.height()) > $window.scrollTop())) {
                    var offsetY =  -(($window.scrollTop() - offsetPositions.top)/ 6);
                    //var offsetY =  -($window.scrollTop()/ 17);
                    var positions = '50%' + offsetY + 'px';
                    $self.css('backgroundPosition', positions);
                }
            });
        });
    });
}
//文字を一文字ずつ表示
$(function(){
    var setElm = $('.split'),
        delaySpeed = 200,
        fadeSpeed = 0;

    setText = setElm.html();

    setElm.css({visibility:'visible'}).children().addBack().contents().each(function(){
        var elmThis = $(this);
        if (this.nodeType == 3) {
            var $this = $(this);
            $this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
        }
    });
    $(window).load(function(){
        splitLength = $('.textSplitLoad').length;
        setElm.find('.textSplitLoad').each(function(i){
            splitThis = $(this);
            splitTxt = splitThis.text();
            splitThis.delay(i*(delaySpeed)).css({display:'inline-block',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
        });
        setTimeout(function(){
            setElm.html(setText);
        },splitLength*delaySpeed+fadeSpeed);
    });
});
