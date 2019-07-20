$(function() {
  //shorthand for doc ready IIFE
  var inputFont;
  var inputColor;

  $("#userSignInput").on("keyup", function() {
    var lenInput = $(this).val().length;
    $("#tiles").text(lenInput);
    computeSign(lenInput);
  });

  $("#userFontInput").on("click", function() {
    inputFont = $(this).is(":checked");
    computeSign($("#userSignInput").val().length, inputColor, inputFont);
  });

  $("#userColorInput").on("click", function() {
    inputColor = $(this).is(":checked");
    computeSign($("#userSignInput").val().length, inputColor, inputFont);
  });

  $("#confirmation").on("click", function() {
    $("#previewScreen").css("visibility", "visible");
    event.preventDefault();
    // console.log('is my console firing');

    var previewMsg = $("#userSignInput").val();
    var previewSubTotal = $("#subTotal").text();
    var previewShipping = $("#shipping").text();
    var previewGrandTotal = $("#grandTotal").text();

    $("#previewMsg").text(previewMsg);
    $("#previewSubTotal").text(previewSubTotal);
    $("#previewShipping").text(previewShipping);
    $("#previewGrandTotal").text(previewGrandTotal);

    //$("#previewScreen").append(previewMsg, previewSubTotal, previewShipping, previewGrandTotal);
    //.animate({ right: "0px" }, 250);
  });
  $("#cancelPreview").on("click", function() {
    $("#previewScreen").css("visibility", "hidden");
    event.preventDefault();

    $("#userSignInput").val("");
    $("#tiles").text("0");
    $("#userFontInput").prop("checked", false);
    $("#userColorInput").prop("checked", false);
    computeSign($("#userSignInput").val().length, inputColor, inputFont);

    //$('#previewScreen').toggle();
  });

  $("#confirmPreview").on("click", function() {
    $("#previewScreen").css("visibility", "hidden");
    event.preventDefault();
  });
});

function computeSign(lenInput, deluxeFont, deluxeColor) {
  var costPerTile = 5;

  if (deluxeFont === true) {
    costPerTile += 1;
  }

  if (deluxeColor === true) {
    costPerTile += 1;
  }

  var subTotal = lenInput * costPerTile;
  var shipping = 7;

  if (lenInput != 0) {
    shipping = 7;
  } else {
    shipping = 0;
  }

  var grandTotal = subTotal + shipping;

  $("#subTotal").text("$" + subTotal);
  $("#shipping").text("$" + shipping);
  $("#grandTotal").text("$" + grandTotal);

  return grandTotal;
}