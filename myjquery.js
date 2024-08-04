//$(document).ready(function () {
    // $('p').dblclick (function()  {
    //   console.log("p was clicked by double");
    //   //$(this).hide();

    // });
    // $('#btn').click(() => {
    //   console.log("you click the button", this);
    // });

    // $('.classname').click(()=>{

    //   console.log("you click on class div");


    // });
     //$('*').click();
     //$('p.odd').click();
     //$('p:first').click();
    //  $('p').mouseenter (function()  {
        //console.log("mouse enter in p");
        //$(this).hide();
  
      // });
  //     $('p').mouseleave(function(){

  //       console.log("mouse leave p");
  //     });

  //     $('p').mousedown(function(){

  //       console.log("mouse down on p");
  //     });
      
  //     $('p').hover(()=>{
  //       console.log("you hover on p");

  //     });


  // });

  $('p').on({
    
    click: function(){

    console.log("thanks for clicking");
  
    },
    mouseleave:function(){

      console.log("leave the mouse");

    },

    mouseenter:function(){

      console.log("mouse enter");
    },


    
  });

   
  //  $('#wiki').hide(1000,function(){

  //   console.log("event hide was perform");
  //  });

  //  $('#wiki').show(1000,function(){

  //   console.log("event show was perform");
  //  });
  
  // $('#btn').click(function(){

  //   //$('#wiki').toggle(1000);
  //   $('#wiki').hide(1000,function(){
  //     console.log("event hide");
  //   });
  //   $('#wiki').show(1000,function(){

  //     console.log("event show")
  //   });

  // })

//    $('#wiki').fadeOut(1000,function(){

//     console.log("fade out");

//    }) 
   
//  $('#wiki').fadeIn(100,function(){

//   console.log("fade in");
//  })
    // $('#btn').click(function(){

    //   $('#wiki').fadeToggle(1000,function(){

    //     console.log("fade toggle");
    //   })
    // })

    // $('#btn').click(function(){
      
    //   $('#wiki').fadeTo(1000,0.5);
    // });

    //$('#wiki').slideUp(1000)
    //$('#wiki').slideDown(1000)
    //$('#wiki').slideToggle(1000)

    // $('#wiki').animate(
    //   {
    //     opacity:0.5,
    //     height:'2000px',
    //     width:'1000px',
    //   },
    //   2000);

    // $('#wiki').animate({
    //   opacity:0.3},2000,
    // );
    // $('#wiki').animate({
    //   opacity:1},2000,
    // );
    // $('#wiki').animate({
    //   height:'500px'},1000
    // );
    // $('#wiki').animate({
    //   width:'300px',
    // });
    
    // $('.odd').empty();
    // $('#wiki').html("hello arooj!")
    //$('#txt').val("class");

    // $('#wiki').css('background-color','red');
    
    