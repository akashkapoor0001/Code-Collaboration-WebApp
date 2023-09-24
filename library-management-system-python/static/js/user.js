$(document).ready(function(){		
	$('#addUser').click(function(){
		$('#userModal').modal({
			backdrop: 'static',
			keyboard: false
		});		
		$("#userModal").on("shown.bs.modal", function () {
			$('#userForm')[0].reset();				
			$('.modal-title').html("<i class='fa fa-plus'></i> Add user");					
			$('#action').val('addUser');
			$('#save').val('Save');
		});
	});		
});