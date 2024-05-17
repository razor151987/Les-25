$(function() {  
    $('#knop').click(function() {  
        var txt = $('#idnaam');  
        if (txt.val() != null && txt.val() != '') {  

        } else {  
            alert('Vul uw naam in.').stop();  
        }  
    })  
});  