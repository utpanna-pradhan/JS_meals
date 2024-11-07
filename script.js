//api operation using AZAX
//inside AJAZ method we are having 4 operations=type,url,sucess,error
$.ajax({
    type :'get',
    //getting data from API
    url: 'https://themealdb.com/api/json/v1/1/filter.php?a=Canadian',

    //2 callback function=sucess and error,
    //if API call is sucess it will print response in our console
    success : function(response)
    {
    //    console.log(response)
       for(var i=0 ; i<response.meals.length ; i++)
       {
        var newitem = `<div class='col-md-3 m-3 shadow-lg p-3 mb-5 bg-body rounded'>
                <p class='fw-bolder text-center'> ${response.meals[i].strMeal} </p>
                <img src = ${response.meals[i].strMealThumb}  class='img-fluid' />
                 <p class="fst-italic text-info">${response.meals[i].idMeal}</p>
            </div>`

            //use # as we are using id
        $('#myitems').append(newitem)
       }
    },
    //if it has any error then it will print error in console
    error : function(error)
    {
        console.log(error)
    }
})