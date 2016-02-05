

var catNum = 8;
if(catNum !== 0){
	$('body').append('<ul>');
	for(var i = 0 ; i < catNum; i++){
		$('body').append("<li> <button id='cat" + i + "'>cat" + i + "</button></li>" );
	}
	$('body').append('</ul>');
}

// for (var num = 0; num < catNum; num++){
// 	console.log(num);
// 	$('#cat'+ num).click(function(){
		
// 		$('#cat'+ num).append("img src='img/cat" + num + ".jpg '>");
// 	});
// }
var count0= 0 ,count1=0,count2=0,count3=0,count4=0;

	$('body').append('<div class=pic></div>');
$('#cat0, #cat1, #cat2, #cat3 ,#cat4').click(function(event){ 

    if($(event.target).attr('id')=='cat0'){
    	 $('.pic').empty();
        $('.pic').append("<img src='img/cat" + 0 + ".jpg '>");
        count0 ++;
        $('.pic').append("<p>"+count0+"</p>");

    } else if($(event.target).attr('id')=='cat1'){
    	 $('.pic').empty();
    	$('.pic').append("<img src='img/cat" + 1 + ".jpg '>");
    	count1++;
    	$('.pic').append("<p>"+count1+"</p>");
        /* specific code for button2 */
    } else if($(event.target).attr('id')=='cat2'){
    	 $('.pic').empty();
    	$('.pic').append("<img src='img/cat" + 2 + ".jpg '>");
    	count2++;
    	$('.pic').append("<p>"+count2+"</p>");
        /* specific code for button3 */
    } else if($(event.target).attr('id')=='cat3'){
    	 $('.pic').empty();
    	$('.pic').append("<img src='img/cat" + 3 + ".jpg '>");
    	count3++;
    	$('.pic').append("<p>"+count3+"</p>");
        /* specific code for button4 */

    } else if($(event.target).attr('id')=='cat4'){
         $('.pic').empty();
        $('.pic').append("<img src='img/cat" + 4 + ".jpg '>");
        count4++;
        $('.pic').append("<p>"+count4+"</p>");
        /* specific code for button4 */
        
    } 
});

// var dir = 'img/';
// var picExtension = '.jpg';

// $.ajax({
//     //This will retrieve the contents of the folder if the folder is configured as 'browsable'
//     url: dir,
//     success: function (data) {
//         //List all .jpg file names in the page
//         $(data).find("a:contains(" + picExtension + ")").each(function () {
//             var filename = this.href.replace(window.location.host, "").replace("http://", "");
//             $("body").append("<img src='" + dir + filename + "'>");
//         });
//     }
// });



// var count1 = 0;
// var count2 = 0;
// var imageTag = '<img id="catpic" src="cat.jpg">';

// 	$("#catpic").click(function(){
// 		count++;
// 	});

