$(document).ready(function(){	
	$('#addCategory').click(function(){
		$('#categoryModal').modal({
			backdrop: 'static',
			keyboard: false
		});		
		$("#categoryModal").on("shown.bs.modal", function () {
			$('#categoryForm')[0].reset();				
			$('.modal-title').html("<i class='fa fa-plus'></i> Add category");					
			$('#action').val('addCategory');
			$('#save').val('Save');
		});
	});
});