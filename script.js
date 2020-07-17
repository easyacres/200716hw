$(document).ready(function (){

    var currentHdrTime = moment().format("LLLL");
    $(".timeHdrDisplay").html(currentHdrTime) ;

    var saveBtn = $(".sBtn");
    saveBtn.on("click" , function(event) {
        event.preventDefault();
        var input = $(this).siblings(".form-control").val();
        var timeB = $(this).siblings().attr("id");
        
        localStorage.setItem(timeB, input);
    
    })

    function hrUpdater () { 
        var currentTime = parseInt( moment().format("H"));
        // timeB === currentTime 
        $(".form-control").each( function() {
            // $(".input-group-text").each( function() {
            var time = $(this).siblings().attr("id");
            if (time < currentTime) { 
               $(this).addClass("past")
                
            } 
            else if (time == currentTime) {
                $(this).removeClass("past")
                $(this).addClass("present")
            }

            else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    }

    hrUpdater();

    $("#hr1").val(localStorage.getItem("1"))
    $("#hr2").val(localStorage.getItem("2"))
    $("#hr3").val(localStorage.getItem("3"))
    $("#hr4").val(localStorage.getItem("4"))
    $("#hr5").val(localStorage.getItem("5"))
    $("#hr6").val(localStorage.getItem("6"))
    $("#hr7").val(localStorage.getItem("7"))
    $("#hr8").val(localStorage.getItem("8"))
    $("#hr9").val(localStorage.getItem("9"))
    $("#hr10").val(localStorage.getItem("10"))
    $("#hr11").val(localStorage.getItem("11"))
    $("#hr12").val(localStorage.getItem("12"))
    $("#hr13").val(localStorage.getItem("13"))
    $("#hr14").val(localStorage.getItem("14"))
    $("#hr15").val(localStorage.getItem("15"))
    $("#hr16").val(localStorage.getItem("16"))
    $("#hr17").val(localStorage.getItem("17"))
    $("#hr18").val(localStorage.getItem("18"))
    $("#hr19").val(localStorage.getItem("19"))
    $("#hr20").val(localStorage.getItem("20"))
    $("#hr21").val(localStorage.getItem("21"))
    $("#hr22").val(localStorage.getItem("22"))
    $("#hr23").val(localStorage.getItem("23"))
    $("#hr24").val(localStorage.getItem("24"))
      
} )