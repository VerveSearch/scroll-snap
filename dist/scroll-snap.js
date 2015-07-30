(function(W,$) { 
	W.vs = W.vs || {};

	W.vs.ScrollSnap = function(el,opts){
		var triggerEl = (opts.triggerHide) ? $(opts.triggerHide) : null;
		this.element = el || {};
		this.center = opts.center || false;
		this.className = opts.className || "scroll-snap"; 
		this.triggerElOffsetTop = (triggerEl) ? triggerEl.offset().top :  this.element.offset.top();
	};

	W.vs.ScrollSnap.boot = function(){
		$('[data-scroll-snap]').each(function(k,o){
			if(!$(this).data('__SCROLL_SNAP__')){
				$(this).data('__SCROLL_SNAP__', new W.vs.ScrollSnap(this));
			}
		});
	};

	W.vs.ScrollSnap.prototype = {
		render: function(){
			$(window).on('scroll', $.proxy(this.onWindowScroll, this));
			$(window).trigger('scroll');
			return this;
		},
		onWindowScroll: function(event){
			var windowScrollTop = $(window).scrollTop(), 
				shouldTriggerClass = windowScrollTop >= this.triggerElOffsetTop;
			this.element.toggleClass(this.className,!shouldTriggerClass);
	 	}
	};

   	$.fn.ScrollSnap = function(options){
		return this.each(function(){
			$(this).data('__SCROLL_SNAP__',  (new W.vs.ScrollSnap($(this), options)).render());
		});
	};

	$(document).ready(function(){
		W.vs.ScrollSnap.boot(); 
	});
})(window, jQuery);