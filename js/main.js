jQuery(function(){
	initTabs();
	initAccordion();
});

function initAccordion(){
	$('.accordion_name').on('click', function(){
		$(this).toggleClass('open');
		$(this).parent().find('.accordion_content').slideToggle();
		if($('.accordion_name.open').length){
			$('.section_bottom').addClass('active');
		} else {
			$('.section_bottom').removeClass('active');
		}
	});
}


function initTabs() {
	$('.nav-button').on('click', function(e){
		e.preventDefault();
		if(!$(this).hasClass('active')){
			var target = $(this).attr('href');
			$('.nav-button.active').removeClass('active');
			$(this).addClass('active');
			$('.accordion_item.show').removeClass('show').hide();
			$(target).show().addClass('show');
		}
	});

	$('.blocks_top_block').on('click', function(e){
		e.preventDefault();
		var link = $(this).attr('href');
		var anchorTop = $('.section_bottom').offset().top;
		$('html').animate({'scrollTop': anchorTop + 'px'}, 1000);
		$('.nav-button[href="' + link + '"]').click();
	});
}
