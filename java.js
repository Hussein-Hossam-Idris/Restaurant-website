$(document).ready(function(){

    $('#homeButton').click(function(){
        $('#menu').slideUp(1000);
        $('#about').slideUp(1000);
        $("#home").slideDown(1000);
        $('#middle-body').slideDown(1000);
        $('#down-body').slideDown(1000);
        document.getElementById('upper-body').style.height = "100vh";
    });

    $('#menuButton').click(function(){
        $("#home").slideUp(1000);
        $('#about').slideUp(1000);
        $('#middle-body').slideUp(1000);
        $('#down-body').slideUp(1000);
        $('#menu').slideDown(1000);
        document.getElementById('upper-body').style.height = "200vh";
    });

    $('#aboutButton').click(function(){
        $("#home").slideUp(1000);
        $('#menu').slideUp(1000);
        $('#about').slideDown(1000);
        $('#middle-body').slideUp(1000);
        $('#down-body').slideUp(1000);
        document.getElementById('upper-body').style.height = "130vh";
    });
    

});

   


