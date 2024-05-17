$(document).on("keypress", "form", function(event) {
    if (event.keyCode === 13) {
       event.preventDefault();
       alert("Je hebt op enter gedrukt, dat is ook een optie.");
       $(this).submit();
    }
 });