		
	$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

      var $target = $( event.currentTarget );

      $target.closest( '.btn-group' )
         .find( '[data-bind="label"]' ).text( $target.text() )
            .end()
         .children( '.dropdown-toggle' ).dropdown( 'toggle' );

      return false;

   });   
   
   $('.percent input[type=text]').on('keyup',function(){
            var oldstr=$('.percent input[type=text]').val();
            var str=oldstr.replace('%',''); 
            $('.percent input[type=text]').val(str+'%');        
        });
        
    function ClearFields() {

    	 document.getElementById("clear").value = "";
    	  document.getElementById("cleardrop").value = "";
    	 
    
	}


$("#clone").click(function() {
    $(".cloned-row:first").clone().insertAfter(".cloned-row:last");
});

$('#myForm').validator()