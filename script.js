$(document).ready(function (){
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
        $(".input-group-text").each( function() {
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

    $("#hr5").val(localStorage.getItem("17"))
    // $("#hr6")

    c
    

    
    // console.log(currentTime);
       {/* current time.  moment ..  */}
    // var timeBlock = $(".timeBlock");
    
    // global var ... to chg classes purpose of..
    
    // added 
    // var saveBtn = $(".input-group-text");
    // . for the classs...
    // 

    //   timeBlock11am <== currentTime
    



    // timeBlock.each(function() {
    //     var currentBlock = $(this);
    //     console.log($(this));
    //     // this grabs the HTML elemetn
    //     var timeOfBlock = parseInt(currentBlock.attr("value"))
    //     console.log("timeOfBlock: ", timeOfBlock);
    //     if (timeOfBlock === currentTime) {
    //         // present
    //         console.log("present")
    //         currentBlock.addClass("present").removeClass("past").removeClass("future");
    
    //         // added
    
    
           
    //         // a
    // // 
    
    //         // console.log(currentTime, timeOfBlock)
    //         // localStorage.getItem(input)
    //         // localStorage.setItem(input)
    //     } else if (timeOfBlock <= currentTime) {
    //         // past
    //         console.log("past")
    //         currentBlock.addClass("past").removeClass("present").removeClass("future");
    //     } else if (timeOfBlock >= currentTime) {
    //         // future
    //         console.log("future")
    //         currentBlock.addClass("future").removeClass("present").removeClass("past");
    //     }
    
    //     // Logic... comparing the integer values... string values.  
        
    



    // }
    //     );   







    
    // each is for loop.  Similar to iterates 1 at a time checklist tool..
    
    // ADD CLASS AND REMOVE CLASS...
    
    
    // .each
        
} )