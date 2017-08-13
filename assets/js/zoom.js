$(document).ready(function () {
    var bankText = $('<p>Used C# to create parent and child classes, to inherit properties from the parent class allowing them to interact with each other.Users can withdraw and deposit funds and check account balances. Deposit account has a feature making users unable to over withdraw from this account.</p >');
               
    $(".image").click(function () {
        $(this).toggleClass("imgClick");
        $(".projectList, .projectText, .major, .special").toggleClass("hide");
    });


});