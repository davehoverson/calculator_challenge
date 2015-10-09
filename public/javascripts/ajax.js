$(function(){
    var operator = "";
    $(".test").on("click", function() {
        event.preventDefault();
        $(".test").removeClass("active");
        $(this).addClass("active");
        operator=$(this).attr("value");
    });

    $("#calculator").submit(function(event){
        event.preventDefault();
        var formData = $("#calculator").serialize();
        formData += "&operator=" + operator;
        console.log(formData);
        $.ajax({
            type:"POST",
            url: "/calculation/addCalculation",
            data: formData,
            success: function(response){
                console.log('Success!');
                getData();
            }
        });
    });

    function getData(){
        $.ajax({
            type:"GET",
            url: "/calculation/getCalculation",
            success: function(data){
                console.log(data);
            }
        })
    }
});



