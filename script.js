//your code here

let toursitSpot=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']
var compare=function(a,b){
	var titleA=a.toLowerCase();
	var titleB=b.toLowerCase();

	titleA=removeArticles(titleA)
	titleB=removeArticles(titleB)

	if(titleA>titleB){
		return 1;
	}if(titleA<titleB){
		return -1;
	}
	
}
function removeArticles(str){
   let	words=str.split(" ")
	if(word.length<=1){
		return str;
	}
	if(words[0]=='a' ||words[0]=='an' ||words[0]=='the' ){
		return words.splice(1).join(" ")	
	}return str;
}
var sorted=toursitSpot.sort(compare);
console.log(sorted)