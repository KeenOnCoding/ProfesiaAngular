jQuery(document).ready(function($) {

    var loading = false;
    var button = $( '.load-more span' ),
	    paged = button.data( 'paged' ),
	    maxPages = button.data( 'max_pages' );
	    firstPost = button.data( 'first_post' );

    $(document).on('click', '.load-more-button', function() {
        if (!loading) {
            loading = true;

            var data = {
                action: 'load_more_posts',
                paged: paged,
                firstPost: firstPost
            };

            $.ajax({
                type: 'POST',
                url: ajax_object.ajax_url,
                data: data,
                success: function(response) {
                    paged++;
                    $('.our-latest-post .items').append(response);

                    if( paged == maxPages ) {
                        button.remove();
                    }

                    loading = false;
                }
            });
        }
    });

    //show case

    var loading = false;
    var buttonCase = $( '#show-more-case' ),
	    pagedCase = buttonCase.data( 'paged' ),
	    maxPagesCase = buttonCase.data( 'max_pages' );

    $(document).on('click', '#show-more-case', function() {
        if (!loading) {
            loading = true;

            var data = {
                action: 'load_more_case',
                paged: pagedCase,
            };

            $.ajax({
                type: 'POST',
                url: ajax_object.ajax_url,
                data: data,
                success: function(response) {
                    pagedCase++;
                    $('.wrapper-cases').append(response);
                    
                    if( pagedCase == maxPagesCase ) {
                        buttonCase.remove();
                    }
                    loading = false;
                }
            });
        }
    });




});