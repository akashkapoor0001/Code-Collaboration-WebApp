$(document).ready(function(){		
	$('#addRack').click(function(){
		$('#rackModal').modal({
			backdrop: 'static',
			keyboard: false
		});		
		$("#rackModal").on("shown.bs.modal", function () {
			$('#rackForm')[0].reset();				
			$('.modal-title').html("<i class='fa fa-plus'></i> Add rack");					
			$('#action').val('addRack');
			$('#save').val('Save');
		});
	});
});