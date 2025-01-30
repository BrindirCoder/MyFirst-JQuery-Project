$('.btn-dark').on({
    "click" : function () {
        $('body').toggleClass('bg-dark') // when you click the black button the mode will be change to dark and when you click the dark agein the mode will be white agein
        $('p').css("color", "blue") // wgen you click the black button the color of text also be changed to blue color 
    },
    "mouseover": function() {
        $('.btn-dark').css("box-shadow","25px 70px rgb(29, 58, 221);")
    }
})


$('.btn-primary').on('click', function () {
    $('.p1').html("Never Give Up because The Greate Thing Take Time "); // when you click the blue button the text will be changed to that text i writed in html() tag 
    $('.p1').css ({
        // "color" : "black",
        "text-size" : "20px", //  when you click the blue button the text size will be changed 
        "font-family" : "Cursive" //  when you click the blue button the font familly   will be changed 
    })
})
