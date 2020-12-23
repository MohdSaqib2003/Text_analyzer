var total_words;
var text;
function analyze(){
   text = document.getElementById('text').value;


  //   length_space.innerHTML = "<table> <tr> <th> check </th> <th> No </th> </tr> <tr> <td> Number of Character (with space) </td> <td>"+text.length+"</td> </tr> "; 
    var text_without_space = text.replace(/ /g,'');
    //  length_no_space.innerHTML = " <tr> <td> Number of Character (without space) </td> <td> "+text_without_space.length +"</td></tr> "; 
// length_space.innerHTML = "<table> <tr> <th> check </th> <th> No </th> </tr> <tr> <td> Number of Character (with space) </td> <td>"+text.length+"</td> </tr> "; 

// length_no_space.innerHTML = " <tr> <td> Number of Character (without space) </td> <td> "+text_without_space.length +"</td></tr> "; 
 
 var text_for_words = text;
 text_for_words = text_for_words.replace(/(^\s*)|(\s*$)/gi,"");    //remove the start and end spaces of the string
 text_for_words= text_for_words.replace(/,/gi," ");         //replace , to space.
 text_for_words= text_for_words.replace(/[ ]{2,}/gi," ");         //reduce multiple spaces to a single space.
 text_for_words = text_for_words.replace(/\n /,"\n");           //exclude a new line with a start spacing.
 total_words =  text_for_words.split(' ').length;             //split() method is used to split a string into an array

 //  no_of_words.innerHTML =" <tr> <td> Number of total words </td> <td> " +total_words +"</td> </tr> </table>";
 
if(text==""){
    total_words = 0;
}
if(text!=""){
    var output = document.getElementById('output');
    output.innerHTML = "<table border='1' class='table-striped ' id='analyse'> <tr> <th> </th> <th>  </th> </tr> <tr> <td> Number of Character (with space) </td> <td>"+text.length+"</td> </tr> <tr> <td> Number of Character (without space) </td> <td> "+text_without_space.length +"</td></tr> <tr> <td> Number of total words </td> <td> " +total_words +"</td> </tr> </table>";
    document.getElementById('search_word').style.display = "block";
}
}

function check(){
var text = document.getElementById('text').value;
var search = document.getElementById('search').value;
var word_char = document.getElementById('word_characteristics');
if(search!="" && text!=""){
var reg  = new RegExp(search,"gi");
var count = text.match(reg);
var word_percent = (count.length*100)/total_words;
word_char.innerHTML = `<table border='1' class='table-striped ' id='word_char'> <tr> <th>&nbsp; &nbsp; Word &nbsp; &nbsp; </th> <th> &nbsp; &nbsp; Occurance &nbsp; &nbsp;</th> <th> &nbsp; &nbsp; Percentage &nbsp; &nbsp; </th> </tr>    <tr> <td> ${search} </th> <th> ${count.length} </th> <th> ${word_percent.toFixed(2)} </th> </tr>  </table>`;
// console.log(search + " percent : "+word_percent.toFixed(2));  
// console.log("Total "+search+" Paragraph : "+count.length);  
}
}

var bottom = document.getElementsByTagName('footer');
var h = Number(window.innerHeight) - 526;

bottom[0].style.marginTop = h+"px"; 
