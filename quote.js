$(document).ready(function(){
    var quoteSource=[
    {
      quote: "comparison is an act of violence against the self",
      name:"ivanla vanzant"
      },
      {
        quote:"you don't have to defend or explain your decisions to anyone. it's your life. live it without apologies.",
        name:"mandy hale"
      },
      {
        quote:"if at first you don’t succeed, try, try again. then quit. there’s no point in being a damn fool about it.",
        name:"w. c. fields"
      },
      {
        quote:"if you don’t like something, change it. if you can’t change it, change your attitude.",
        name:"maya angelou"
      },
      {
        quote:"the purpose of life is a life of purpose.",
        name:"robert bayne"
      },
      {
        quote:"we become what we think about.",
        name:"sam levenson"
      },
      {
        quote:"a creative man is motivated by the desire to achieve, not by the desire to beat others.",
        name:"earl nightingale"
      },
      {
        quote:"there is nothing more uncommon than common sense.",
        name:"frank lloyd wright"
      },
      {
        quote:"life isn't about finding yourself. life is about creating yourself.",
        name:"george bernard shaw"
      },
      {
        quote:"we don't see things the way they are. we see the the way WE are.",
        name:"talmud"
      },
      {
        quote:"ever tried. ever failed. no matter. try again. fail again. fail better.",
        name:"samuel beckett"
      },
      {
        quote:"uncertainty is the only certainty there is, and knowing how to live with insecurity is the only security.",
        name:"john allen paulos"
      },
      {
        quote:"do not take life too seriously. you will never get out of it alive.",
        name:"elbert hubbard"
      },
      {
        quote:"always do whatever's next.",
        name:"george carlin"
      },
      {
        quote:"hapiness is not something ready made. it comes from your own actions.",
        name:"dalai lama"
      }

  ];


    $('#quoteButton').click(function(evt){
      console.log("heyo, you clicked");
      //define the containers of the info we target
      var quote = $('#quoteBox p').text();
      var quotePerson = $('#quotePerson').text();
      //prevent browser's default action
      evt.preventDefault();
      //getting a new random number to attach to a quote and setting a limit
      var sourceLength = quoteSource.length;
      var randomNumber= Math.floor(Math.random()*sourceLength);
      //set a new quote
      for(i=0;i<=sourceLength;i+=1){
      var newQuoteText = quoteSource[randomNumber].quote;
      var newQuotePerson = quoteSource[randomNumber].name;
      //console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteBox = $('#quoteBox');
      //fade out animation with callback
      quoteBox.fadeOut(timeAnimation, function(){
        quoteBox.html('');
        quoteBox.append('<p>'+newQuoteText+'</p>'+'<p id="quotePerson">'+'-               '+newQuotePerson+'</p>');

        //fadein animation.
        quoteBox.fadeIn(timeAnimation);

      });

      break;
    }//end for loop

  });//end quoteButton function


});//end document ready
