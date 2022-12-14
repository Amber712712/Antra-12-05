//1
function re(num){
    s=''+num;
    let n=s.split("").reverse();
    let res=n.join("");
    return res;
}
//console.log(re(234567));
//2
function checkpa(s){
    return s==s.split("").reverse().join("");
}
//console.log(checkpa('abcba'));
//3
function combinations(s){
    let res=[];
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<s.length;j++){
            res.push(s.slice(i,j));
        }
    }
    return res;
}
//console.log(combinations('abcd'));
//4
function sortalphbet(s){
    return s.split("").sort().join("");
}
//console.log(sortalphbet('dcbazzz')); 
//5
function upperfirst(s){
    words=s.split(" ");
    let newword=words.map((word)=>{
        return word[0].toUpperCase()+word.substr(1);
    })
    return newword.join(" ");
}
//console.log(upperfirst('i am a cat'));

//6
function findlongest(s){
    words=s.split(' ');
    return words.sort((a,b)=>{return b.length-a.length;}
    )[0];
}
//console.log(findlongest('abc a bbbbb m'));
//7
function countVo(s){
    arr=s.split("");
    var v_set=new Set(['a','e','i','o','u']);
    return arr.reduce((precount,cur)=>{
        if(v_set.has(cur)){
            precount+=1;
        }
        return precount;
    },0

    )
}

//console.log(countVo('The quick brown fox'));
//8
function checkPrime(num){
    if(num==2){
        return 'it is a prime number';
    }
    num_half=parseInt(num/2)+1;
    for(let i=2;i<=num_half;i++){
        if(num%i==0){
            return 'it is not a prime number';
        }
    }
    return 'it is a prime number';
}

//9
function checkType(variable){
    return typeof(variable);
}
//console.log(checkType(true));
//10
function identityMatrix(n){
    let res=[];
    for(let i=0;i<n;i++){
        if(!res[i]){
            res[i]=[];
        }

        for(let j=0;j<n;j++){
            if(i==j){
                res[i][j]=1;
            }
            else{
                res[i][j]=0;
            }
        }
    }
    return res;

    
}
//console.log(identityMatrix(5));
//11
function findSecond(arr){
    return [arr.sort((a,b)=>(a-b))[1],arr.sort((a,b)=>(a-b))[arr.length-2]];
}
//console.log(findSecond([3,1,5,4,2]));

//12
function checkPerfect(num){
    let res=0;
    if(num%2!=0){
        return false;
    }
    for (let index = 1; index<=num/2; index++) {
        if(num%index==0){
            res+=index;
        }
    }
    if(res==num){
        return true;
    }
    else{
        return false;
    }
}
//console.log(checkPerfect(496));
//13
function factor(num){
    let res=[];
    for(let i=1;i<=parseInt(num/2);i++){
        if(num%i==0){
            res.push(i);
        }
    }
    return res;
}
//14
function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
//15
function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
//16
function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}
//17
function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
    return uchars;
    }
//18
function array_binarySearch(narray, delement) {
    var mposition = Math.floor(narray.length / 2);
 
    if (narray[mposition] === delement){
       return mposition;
    }
    else if (narray.length === 1) 
    {
       return null;
    }
    else if (narray[mposition] < delement) {
       var arr = narray.slice(mposition + 1);
       var res = array_binarySearch(arr, delement);
       if (res === null)
       {
          return null;
       }
       else {
          return mposition + 1 + res;
       }
    }
    else {
       var arr1 = narray.slice(0, mposition);
       return array_binarySearch(arr1, delement);
    }
 }
//19
function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
//20
function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
//21
function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}
//22
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
//23
function find_FirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
   
    for (var x = 0; x < arra1.length; x++) {
      ctr = 0;
   
      for (var y = 0; y < arra1.length; y++) 
      {
        if (arra1[x] === arra1[y]) {
          ctr+= 1;
        }
      }
   
      if (ctr < 2) {
        result = arra1[x];
        break;
      }
    }
    return result;
  }
  //24
  function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}
//25
function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
//26
function longest_substring_without_repeating_characters(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
    curr_char = chars[i];
    if (!hash[chars[i]]) 
    { 
    str += curr_char; 
    hash[chars[i]] = {index:i};
    }
    else 
    {
    if(longest_string.length <= str.length)
    {
    longest_string = str;
    }
    var prev_dupeIndex = hash[curr_char].index;
    var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
    str = str_FromPrevDupe + curr_char;
    hash = {};
    for (var j = prev_dupeIndex + 1; j <= i; j++) {
    hash[input.charAt(j)] = {index:j};
    }
    }
    }
    return longest_string.length > str.length ? longest_string : str;
    }
//27
function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
    }
    
    function longest_palindrome(str1){
    
    var max_length = 0,
    maxp = '';
    
    for(var i=0; i < str1.length; i++) 
    {
    var subs = str1.substr(i, str1.length);
    
    for(var j=subs.length; j>=0; j--) 
    {
    var sub_subs_str = subs.substr(0, j);
    if (sub_subs_str.length <= 1)
    continue;
    
    if (is_Palindrome(sub_subs_str))
    {
    if (sub_subs_str.length > max_length) 
    {
    max_length = sub_subs_str.length;
    maxp = sub_subs_str;
    }
    }
    }
    }
    
    return maxp;}
//28
function func1(id, cb)
{
    cb();  
}

function func() {
    console.log('Hello');
}
func1(2,func());
//29
function f() {
    console.log( arguments.callee.name );
}

f();
    

