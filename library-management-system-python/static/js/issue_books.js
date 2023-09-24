$(document).ready(function(){	
	
	$('#issueBook').click(function(){
		$('#issuedBookModal').modal({
			backdrop: 'static',
			keyboard: false
		});		
		$("#issuedBookModal").on("shown.bs.modal", function () {
			$('#issuedBookForm')[0].reset();				
			$('.modal-title').html("<i class='fa fa-plus'></i> Issue book");					
			$('#action').val('issueBook');
			$('#save').val('Save');
		});
	});			
});