$(document).ready(function() {
  $("#form0ne").submit(function(event) {
    
    const thing1Input = $("input#thing1").val();
    const thing2Input = $("input#thing2").val();
    const thing3Input = $("input#thing3").val();
    const thing4Input = $("input#thing4").val();
    

    const favoriteThingsArray = [thing1Input, thing2Input, thing3Input, thing4Input];
    
    //const newArray = newArray.push(4);

    //$("#output1").text(favoriteThingsArray[0]);
    //$("#output2").text(favoriteThingsArray[1]);
    //$("#output3").text(favoriteThingsArray[2]);

    const newArray= [];
    newArray.push(favoriteThingsArray[0]);
    newArray.push(favoriteThingsArray[1]);
    newArray.push(favoriteThingsArray[2]);

    //$("#output1").text(newArray[0]);
    $("#output1").text(newArray[0]);
    $("#output2").text(newArray[1]);
    $("#output3").text(newArray[2]);
    


  
    event.preventDefault();

  });
});