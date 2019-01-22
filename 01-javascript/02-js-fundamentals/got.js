$(document).ready(function() {
    $('img').click(function(){
     var houseId = $(this).attr("id");
     $.get(`https://anapioficeandfire.com/api/houses/${houseId}`, function(data){
         var house_title = data.titles[0]
         for (var i = 1; i < data.titles.length; i++) {
             house_title += ", " + data.titles[i]
         }
         var display_info = `<fieldset>
            <legend>House Details</legend>
            <h2>Name: ${data.name}</h2>
            <h3>Words: ${data.words}</h3>
            <h3>Titles: ${house_title}</h3>
         </fieldset>`
         $('#house_details').html(display_info);
     	});
    })
});
