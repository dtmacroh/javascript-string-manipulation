//
// 	Name: Debbie Macrohon	
//	UCID: 10121170
function getStats(txt) {
    let s = document.getElementById("txtarea").value.toLowerCase();
	let arr = s.match(/[a-z0-9]+/gi);
	let unique = Array.from(new Set(arr));
	return {
        nChars: getLength(s),
        nWords: getWords(s),
        nLines: getLines(s),
        nNonEmptyLines: nonEmptyLines(s),
		maxLineLength: getMaxLine(s),
        averageWordLength: avgWords(s),
        
        palindromes: getPalindrome(unique),
        longestWords: longestWords(unique),
        mostFrequentWords: freqWords(arr)
    };
}

function getLength(s){
	return s.length;			

}


function getWords(s){
	var pat = "^[a-z0-9]*$" //
	var space = 0;
	var alpha = false;
	
	for (i=0;i<s.length;i++)
	{
		if (s.charAt(i).match(pat)&&!alpha)
		{
			space++;
			alpha = true;
		}
		else if (!s.charAt(i).match(pat))
		{alpha = false;}
		
	}
	return space;			

}

function getLines(s){
	newLine = 0;
	if (s.length>0){newLine = 1;}
	for (let i=0;i<s.length;i++)
	{
		if (s.charAt(i)=='\n')
		{newLine++;}
	}
	return newLine;		
}
function getMaxLine(s){
	var lines = s.split("\n");	
	var maxLine = 0;
	for (let i=0;i<lines.length;i++)
	{
		if (lines[i].length>maxLine)
		{
			maxLine = lines[i].length;
		}
	}
	return maxLine;
}
function avgWords(s)
{
	var pat = "^[a-z0-9]*$"
	var wordcount = 0;
	for (let i=0;i<s.length;i++)
	{
		if (s.charAt(i).match(pat))
		{
			wordcount++;
		}		
	}
	return wordcount/(getWords(s));			

}
function getPalindrome(unique)
{
	let pali = [];
	
	for(let x=0;x<unique.length;x++)
	{
		
		var isPali = isPalindrome(unique[x]);
		if (isPali && unique[x].length >2){
			pali.push(unique[x]);
		}
	}
	return pali;
	

}
function isPalindrome(s){
	var bool = false;
	if (s.length <1)
	{
		bool = true;		
	}
	else if(s.charAt(0)===s.charAt(s.length-1)){
		bool = true;
		bool = bool&&isPalindrome(s.slice(1,s.length-1));		
	}
	return bool;
	
}

function longestWords(set)
{
	
	return set.sort(function(a,b){
		return a.length===b.length?a.localeCompare(b):b.length-a.length;
	}).slice(0,10);
	
	
}
function freqWords(arr)
{
	let counts = {};
	let counts_arr= [];
	let counts_present= []
	var curr_item = "";
	for (let i=0;i<arr.length;i++){
		curr_item = arr[i];
		if (curr_item in counts){
			counts[curr_item] = counts[curr_item] + 1;				
		}else{
			counts[curr_item] =1;	}
	}
	for (var item in counts){
		counts_arr.push([item,counts[item]]);
	}
	counts_arr = counts_arr.sort(function(a,b){ 
		return b[1]===a[1]?a[0].localeCompare(b[0]):b[1]-a[1];});
	for (var i = 0; i<counts_arr.length;i++){
		counts_present[i] = counts_arr[i][0]+"(" + counts_arr[i][1]+")";
	}
	return counts_present.slice(0,10);
}
function nonEmptyLines(s){
	var lines = s.split("\n");	
	var pat = "[^\s]+";
	let nonEmpty = 0;
	
	for (let i=0;i<lines.length;i++)
	{
		if (lines[i].match(pat))
		{ 	
			nonEmpty++;
			console.log(lines[i]);
		}
	}
	return nonEmpty;

}
