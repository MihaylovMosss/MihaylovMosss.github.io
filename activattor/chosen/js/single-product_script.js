
/************************/
$(document).ready(function(){
	nsp_tabs_check();
	nkp_details_check();
});

function nsp_tabs_check(){
	if (window.innerWidth < 768) {
		$('#pills-properties h2').css('display', 'none');
		$('.tab-content .tab-pane').each(function(){
			var tab = $(this).attr('id'), title = $(this).data('title'), active = '';
			if ($(this).hasClass('active')) active = ' active';
			if ($('.nsp-tab-toggler[href="#'+tab+'"]').length < 1) {
				$(this).before('<a href="#'+tab+'" class="nsp-tab-toggler scroll2tab'+active+'">'+title+'</a>');
			}
		});
	} else {
		$('.nsp-tab-toggler').remove();
	}
}
function nkp_details_check(){
	if ( window.innerWidth < 768 ) {
		if ($('.nkp-details').length > 0) {
			$('.nkp-details').each(function(){
				var tile = $(this).closest('.nkatalog-product');
				if (!tile.hasClass('tth-visible') && $('.nkp-tthToggle', tile).length<1 && $('.main-attributes', tile).length > 0) $('.nkp-actions', tile).append('<div class="nkp-tthToggle"><i>Показать характеристики</i></div>');
				if (!tile.hasClass('tth-visible') && $('.nkp-tthToggle', tile).length<1 && $('p', tile).length > 0) $('.nkp-actions', tile).append('<div class="nkp-tthToggle"><i>Показать описание</i></div>');
			});
			if ($('.nkatalog-tth-toggler').length < 1) $('.nkatalog-tth-toggle').append('<div class="nkatalog-tth-toggler"><i></i>Скрыть характеристики</div>');
		} else {
			$('.nkatalog-tth-toggler').remove();
		}
	} else {
		$('.nkp-tthToggle').remove();
	}
}

$(document).on('click','.scroll2tab, .nsp-excerpt a[href="#reviews"]',function(event){
	event.preventDefault();
	var $this = $(this),
		href = $this.attr('href'),
		scroll = true,
		offset = 0;
	
	if ($this.hasClass('nsp-tab-toggler')) {
		if ($this.hasClass('active')) {
			$('.nsp-tab-toggler, .tab-pane').removeClass('active');
			return false;
		}
		scroll = true;
		offset = 52;
		$('.nsp-tab-toggler').removeClass('active');
		$this.addClass('active');
	}
	scroll2producttab(href, scroll, offset);
	
    return false;
});

var addComment = {
	moveForm: function( commId, parentId, respondId, postId ) {
		var div, element, style, cssHidden,
			t           = this,
			comm        = t.I( commId ),
			respond     = t.I( respondId ),
			cancel      = t.I( 'cancel-comment-reply-link' ),
			parent      = t.I( 'comment_parent' ),
			post        = t.I( 'comment_post_ID' ),
			commentForm = respond.getElementsByTagName( 'form' )[0];

		if ( ! comm || ! respond || ! cancel || ! parent || ! commentForm ) {
			return;
		}

		t.respondId = respondId;
		postId = postId || false;

		if ( ! t.I( 'wp-temp-form-div' ) ) {
			div = document.createElement( 'div' );
			div.id = 'wp-temp-form-div';
			div.style.display = 'none';
			respond.parentNode.insertBefore( div, respond );
		}

		comm.parentNode.insertBefore( respond, comm.nextSibling );
		if ( post && postId ) {
			post.value = postId;
		}
		parent.value = parentId;
		cancel.style.display = '';

		cancel.onclick = function() {
			var t       = addComment,
				temp    = t.I( 'wp-temp-form-div' ),
				respond = t.I( t.respondId );

			if ( ! temp || ! respond ) {
				return;
			}

			t.I( 'comment_parent' ).value = '0';
			temp.parentNode.insertBefore( respond, temp );
			temp.parentNode.removeChild( temp );
			this.style.display = 'none';
			this.onclick = null;
			return false;
		};

		/*
		 * Set initial focus to the first form focusable element.
		 * Try/catch used just to avoid errors in IE 7- which return visibility
		 * 'inherit' when the visibility value is inherited from an ancestor.
		 */
		try {
			for ( var i = 0; i < commentForm.elements.length; i++ ) {
				element = commentForm.elements[i];
				cssHidden = false;

				// Modern browsers.
				if ( 'getComputedStyle' in window ) {
					style = window.getComputedStyle( element );
				// IE 8.
				} else if ( document.documentElement.currentStyle ) {
					style = element.currentStyle;
				}

				/*
				 * For display none, do the same thing jQuery does. For visibility,
				 * check the element computed style since browsers are already doing
				 * the job for us. In fact, the visibility computed style is the actual
				 * computed value and already takes into account the element ancestors.
				 */
				if ( ( element.offsetWidth <= 0 && element.offsetHeight <= 0 ) || style.visibility === 'hidden' ) {
					cssHidden = true;
				}

				// Skip form elements that are hidden or disabled.
				if ( 'hidden' === element.type || element.disabled || cssHidden ) {
					continue;
				}

				element.focus();
				// Stop after the first focusable element.
				break;
			}

		} catch( er ) {}

		return false;
	},

	I: function( id ) {
		return document.getElementById( id );
	}
};

jQuery(function($){
 
	/*
	 * On comment form submit
	 */
	$( '#commentform' ).submit(function(){
 
		// define some vars
		var button = $('#submit'), // submit button
		    respond = $('#respond'), // comment form container
		    commentlist = $('.comment-list'), // comment list container
		    cancelreplylink = $('#cancel-comment-reply-link');
 
		// if user is logged in, do not validate author and email fields
		if( $( '#author' ).length )
			$( '#author' ).validate();
 
		if( $( '#email' ).length )
			$( '#email' ).validateEmail();
 
		// validate comment in any case
		$( '#comment' ).validate();
 
		// if comment form isn't in process, submit it
		if ( !button.hasClass( 'processing' ) && !$( '#author' ).hasClass( 'error' ) && !$( '#email' ).hasClass( 'error' ) && !$( '#comment' ).hasClass( 'error' ) ){
 
			// ajax request
			$.ajax({
				type : 'POST',
				url : "/wp-admin/admin-ajax.php", // admin-ajax.php URL
				data: $(this).serialize() + '&action=nsubmit_ajax_comment', // send form data + action parameter
				beforeSend: function(xhr){
					// what to do just after the form has been submitted
					button.addClass('processing').val('Подождите...');
				},
				error: function (request, status, error) {
					if( status == 500 ){
						alert( 'Ошибка!' );
					} else if( status == 'timeout' ){
						alert('Ошибка!');
					} else {
						// process WordPress errors
						var wpErrorHtml = request.responseText.split("<p>"),
							wpErrorStr = wpErrorHtml[1].split("</p>");
 
						alert( wpErrorStr[0] );
					}
				},
				success: function ( addedCommentHTML ) {
 
					// if this post already has comments
					if( commentlist.length > 0 ){
 
						// if in reply to another comment
						if( respond.parent().hasClass( 'comment' ) ){
 
							// if the other replies exist
							if( respond.parent().children( '.children' ).length ){	
								respond.parent().children( '.children' ).append( addedCommentHTML );
							} else {
								// if no replies, add <ol class="children">
								addedCommentHTML = '<ol class="children">' + addedCommentHTML + '</ol>';
								respond.parent().append( addedCommentHTML );
							}
							// close respond form
							cancelreplylink.trigger("click");
						} else {
							// simple comment
							commentlist.append( addedCommentHTML );
						}
					}else{
						// if no comments yet
						addedCommentHTML = '<ol class="comment-list">' + addedCommentHTML + '</ol>';
						respond.before( $(addedCommentHTML) );
					}
					// clear textarea field
					$('#comment').val('');
				},
				complete: function(){
					// what to do after a comment has been added
					button.removeClass( 'processing' ).val( 'Отправить отзыв' );
				}
			});
		}
		return false;
	});
});
