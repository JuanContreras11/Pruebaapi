$(document).ready(function () {

    $("form").submit(function (event) {
        event.preventDefault();

        let valueInput = $("#heroInput").val();



       


            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://www.omdbapi.com/?apikey=ba305978&s=" +valueInput ,
                
                
                
                //"http://www.omdbapi.com/?t=" + valueInput + "&apikey=ba305978&y=2016",
    
                success: function (data) {
                   
                    
    
    
                    
    
                    console.log(data)  
    
                    var pelis = data.Search;
                    for (var i = 0; i < pelis.length; i++) {
                        console.log(pelis[i].Title);

                        let Titulo = pelis[i].Title;
                        let imagen = pelis[i].Poster;

                        $("#heroInfo").html(`
      
                        <div class="card" style="width: 18rem;">
                        <img src="${imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h1>${Titulo}</h1>
                        </div>
                      </div>

                      
  
                  `)




                    }

                   
                    

                   
    
    
                },
            })

        


        


    })



})

