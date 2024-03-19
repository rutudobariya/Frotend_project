$(document).ready(function () {
    $(".number").on("click", function () {
        $(".output").val($(".output").val() + $(this).html());
    });

    $(".eqqals").on("click", function () {
        $(".output").val(eval($(".output").val()));
    });

    $("#clear").on("click", function () {
        $(".output").val("");
    });

    $(".delete").on("click", function () {
        del = $(".output").val();
        $(".output").val(del.substring(0, del.length - 1));
    });
});