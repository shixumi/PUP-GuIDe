<script type= "text/javascript">
	$(document).ready( function() {
		$('#submit').on('click', function(e) {
			e.preventDefault();
			preview();
		});
	});

	function preview(){            
		var text = $('input[name="text"]').val();
		var text_label = $('label[for="text"]').text();
		var text_data = '<p><strong>' + text_label + '</strong> : ' + text + '</p>';
		var radio = $('input[type="radio"]:checked').val();
		var radio_label = $('label[for="radio"]').text();
		var rdo = 'Undefined';
		if(radio == 0) {
			rdo = 'No';
		} else if(radio == 1) {
			rdo = 'Yes';
		}
		var radio_data = '<p><strong>' + radio_label + '</strong> : ' + rdo + '</p>';
		//var checkbox = $('input[name="checkbox"]').val();
		var checkbox_label = $('label[for="checkbox"]').text();
		var chkArray = [];
		$('input[type="checkbox"]:checked').each(function() {
			chkArray.push($(this).val());
		});
		var chkval = '';
		var chkSelected1 = false;
		var chkSelected2 = false;
		var chkSelected3 = false;
		$.each(chkArray, function( index, value ) {
			if(value == 1) {
				chkSelected1 = true;
				chkval += 'Item 1';
			} else if(value == 2) {
				if(chkSelected1) {
					chkval += ',';
				}
				chkSelected2 = true;
				chkval += 'Item 2';
			} else if(value == 3) {
				if(chkSelected2) {
					chkval += ',';
				}
				chkSelected3 = true;
				chkval += 'Item 3';
			} else if(value == 4) {
				if(chkSelected3) {
					chkval += ',';
				}
				chkval += 'Item 4';
			}
		});
		var checkbox_data = '<p><strong>' + checkbox_label + '</strong> : ' + chkval + '</p>';
		var optionval = $('#optionval option:selected').val();
		var optionval_label = $('label[for="optionval"]').text();
		var optval = '';
		if(optionval == 1) {
			optval = 'Option 1';
		} else if(optionval == 2) {
			optval = 'Option 2';
		} else if(optionval == 3) {
			optval = 'Option 3';
		} else if(optionval == 4) {
			optval = 'Option 4';
		}
		var optionval_data = '<p><strong>' + optionval_label + '</strong> : ' + optval + '</p>';
		var textarea = $('#textarea').val();
		var textarea_label = $('label[for="textarea"]').text();
		var textarea_data = '<p><strong>' + textarea_label + '</strong> : ' + textarea + '</p>';
		
		var data = text_data + radio_data + checkbox_data + optionval_data + textarea_data;
		$('#preview_data').html('');
		$('#preview_data').append(data);
		$('#preview_data').dialog({
			resizable: false,
			//height:140,
			modal: true,
			buttons: {
				'Submit': function() {
					//submit the form
					$(this).dialog("close");
				},
				Cancel: function() {
					$(this).dialog("close");
				}
			}
		});
	}
</script>