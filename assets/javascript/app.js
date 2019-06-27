/* ---------- Variables ---------- */
var totalQuestions = 5;
var timesUp = false;

/* ---------- Questions ---------- */
var question1 = {
    q: "Who was Halo's first developing company?",
    a: "Bungie", //correct
    b: "343 Industries",
    c: "EA Games",
};

var question2 = {
    q: "What is Master Chief's real name?",
    a: "David",
    b: "John", //correct
    c: "Michael",
};

var question3 = {
    q: "What is the name of Master Chief's partner AI?",
    a: "Elise",
    b: "Cortana", //correct
    c: "Autumn",
};

var question4 = {
    q: "What species is Arbiter Thel Vadam?",
    a: "Jiralhanae",
    b: "Flood",
    c: "Elites", //correct
};

var question5 = {
    q: "What team did Master Chief lead?",
    a: "Blue Team", //correct
    b: "Fireteam Osiris",
    c: "Noble Team",
};


/* ---------- Functions ---------- */
function start() {
    $("#start").click(function() {
        $("#start").hide();
        $(".choices").show();
        $(".questions").show();
        $("#message").html("<p>Quickly! Choose the right answers before the Covenant launch their next attack!</p>")
        $("#a1").append(question1.a);
        $("#b1").append(question1.b);
        $("#c1").append(question1.c);
        $("#a2").append(question2.a);
        $("#b2").append(question2.b);
        $("#c2").append(question2.c);
        $("#a3").append(question3.a);
        $("#b3").append(question3.b);
        $("#c3").append(question3.c);
        $("#a4").append(question4.a);
        $("#b4").append(question4.b);
        $("#c4").append(question4.c);
        $("#a5").append(question5.a);
        $("#b5").append(question5.b);
        $("#c5").append(question5.c);
        $("#submit").show();
    });
};

function timesUp() {}


/* ---------- Prcoesses ---------- */
$(document).ready(function() {
    
    //Game Start
    $("#submit").hide();
    $("#restart").hide();
    $(".questions").hide();
    $(".choices").hide();
    start();

    //Selecting Choices to give active class
    $(".btn1").on("click", function() {
        $(this).removeClass("inactive").addClass("active").siblings().removeClass("active");
    });

    $(".btn2").on("click", function() {
        $(this).removeClass("inactive").addClass("active").siblings().removeClass("active");
    });

    $(".btn3").on("click", function() {
        $(this).removeClass("inactive").addClass("active").siblings().removeClass("active");
    });
    
    $(".btn4").on("click", function() {
        $(this).removeClass("inactive").addClass("active").siblings().removeClass("active");
    });

    $(".btn5").on("click", function() {
        $(this).removeClass("inactive").addClass("active").siblings().removeClass("active");
    });

    //Submit
    $("#submit").on("click", function() {
        var correct = 0;
        var incorrect = 0;
        var score = 0;
        $("#correct").show();
        $("#incorrect").show();
        $("#score").show();
        $("#submit").hide();
        $(".questions").hide();
        $(".choices").hide();
        $("#restart").show();

        //Counting correct and incorrect choices
        if($("#a1").hasClass("active")) {
            correct++;
        } if($("#b1").hasClass("active") || $("#c1").hasClass("active")) {
            incorrect++;
        } else if($("#a1").hasClass("inactive") && $("#b1").hasClass("inactive") && $("#c1").hasClass("inactive")) {
            incorrect++;
        };

        if($("#b2").hasClass("active")) {
            correct++;
        } if($("#a2").hasClass("active") || $("#c2").hasClass("active")) {
            incorrect++;
        } else if($("#a2").hasClass("inactive") && $("#b2").hasClass("inactive") && $("#c2").hasClass("inactive")) {
            incorrect++;
        };

        if($("#b3").hasClass("active")) {
            correct++;
        } if($("#a3").hasClass("active") || $("#c3").hasClass("active")) {
            incorrect++;
        } else if($("#a3").hasClass("inactive") && $("#b3").hasClass("inactive") && $("#c3").hasClass("inactive")) {
            incorrect++;
        };

        if($("#c4").hasClass("active")) {
            correct++;
        } if($("#b4").hasClass("active") || $("#a4").hasClass("active")) {
            incorrect++;
        } else if($("#a4").hasClass("inactive") && $("#b4").hasClass("inactive") && $("#c4").hasClass("inactive")) {
            incorrect++;
        };

        if($("#a5").hasClass("active")) {
            correct++;
        } if($("#b5").hasClass("active") || $("#c5").hasClass("active")) {
            incorrect++;
        } else if($("#a5").hasClass("inactive") && $("#b5").hasClass("inactive") && $("#c5").hasClass("inactive")) {
            incorrect++;
        };

        //Scoring
        if(incorrect == 0) {
            $("#correct").html("<p>Nice shooting out there.</p>")
            $("#incorrect").html("<p>You didn't miss a single one!</p>")
            $("#score").html("<p>Headshots: 100%</p>")
            $("#message").html("<p>Good job, Spartan. You did it!!</p>")
        } else{
            var score = (Math.floor((correct / totalQuestions) * 100))
            $("#correct").html("<p>You got " + correct + " correct!</p>");
            $("#incorrect").html("<p>But... " + incorrect + " incorrect</p>")
            $("#score").html("<p>You're score is " + score + "%!!</p>")
            $("#message").html("<p>Phew! We barely made it out of there.</p>")
        };
    });

    //Restarting
    $("#restart").on("click", function() {
        $("#restart").hide();
        $("#a1").removeClass("active").addClass("inactive");
        $("#b1").removeClass("active").addClass("inactive");
        $("#c1").removeClass("active").addClass("inactive");
        $("#a2").removeClass("active").addClass("inactive");
        $("#b2").removeClass("active").addClass("inactive");
        $("#c2").removeClass("active").addClass("inactive");
        $("#a3").removeClass("active").addClass("inactive");
        $("#b3").removeClass("active").addClass("inactive");
        $("#c3").removeClass("active").addClass("inactive");
        $("#a4").removeClass("active").addClass("inactive");
        $("#b4").removeClass("active").addClass("inactive");
        $("#c4").removeClass("active").addClass("inactive");
        $("#a5").removeClass("active").addClass("inactive");
        $("#b5").removeClass("active").addClass("inactive");
        $("#c5").removeClass("active").addClass("inactive");
        $(".choices").show();
        $(".questions").show();
        $("#submit").show();
        $("#correct").hide();
        $("#incorrect").hide();
        $("#score").hide();
        $("#message").html("<p>You're back! Lets go another round!</p>");
    });
    

});