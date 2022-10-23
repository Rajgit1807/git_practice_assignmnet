var str ="Rudraraj";
var str1 ="";
for(i = str.length-1 ; i >= 0; i--){
       str1 += str[i];
}
if(str ==str1){
    console.log(str , " is palindrome ");
}else{
    console.log(str , "is not palindrome");
}