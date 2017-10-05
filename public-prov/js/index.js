const inputFile = $('input[name=sampleFile]');

inputFile.change(() => {
    $("#textbox").html(inputFile.val());
    $("#feedback").html("");
});

$("form").submit(() =>{
    $("#feedback").html("File uploaded!");
});
