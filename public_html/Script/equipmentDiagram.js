$(document).ready(function(){ 
	$("#boardInfo").hide();
	$("#ropeInfo").hide();
	$("#leashInfo").hide();
	$("#glovesInfo").hide();
	$("#bootsInfo").hide();

	$("#surfBoardImg").hover(
	  function() {
	    $("#boardInfo").show();
	  }, function() {
	    $("#boardInfo").hide();
	  }
	);

	$("#rope").hover(
	  function() {
	    $("#ropeInfo").show();
	  }, function() {
	    $("#ropeInfo").hide();
	  }
	);

	$("#leash").hover(
	  function() {
	    $("#leashInfo").show();
	  }, function() {
	    $("#leashInfo").hide();
	  }
	);

	$("#gloves").hover(
	  function() {
	    $("#glovesInfo").show();
	  }, function() {
	    $("#glovesInfo").hide();
	  }
	);

	$("#boots").hover(
	  function() {
	    $("#bootsInfo").show();
	  }, function() {
	    $("#bootsInfo").hide();
	  }
	);
});