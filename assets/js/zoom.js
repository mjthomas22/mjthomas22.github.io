$(document).ready(function () {
    var bankImg = "<img id=\"bigBankPicture\" class=\"bigImg img-responsive\" src=\"images/bankAccount.png\" />";
    var reviewImg = "<img id=\"bigReviewPicture\" class=\"bigImg img-responsive\" src=\"images/Reviews.png\" />"; 
    var wardrobeImg = "<img id=\"bigWardrobePicture\" class=\"bigImg img-responsive\" src=\"images/edmx.png\" />";

    $("#bankPicture").click(function () {
        $("#one").toggleClass("hide");
        $("#two").before(bankImg);

        $("#bigBankPicture").click(function () {
            $("#one").toggleClass("hide");
            $("#bigBankPicture").remove();
        });
    });

    $("#reviewPicture").click(function () {
        $("#two").toggleClass("hide");
        $("#three").before(reviewImg);

        $("#bigReviewPicture").click(function () {
            $("#two").toggleClass("hide");
            $("#bigReviewPicture").remove();
        });
    });

    $("#wardrobePicture").click(function () {
        $("#three").toggleClass("hide");
        $("#four").before(wardrobeImg);

        $("#bigWardrobePicture").click(function () {
            $("#three").toggleClass("hide");
            $("#bigWardrobePicture").remove();
        });
    });

});