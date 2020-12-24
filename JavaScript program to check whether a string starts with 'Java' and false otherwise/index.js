var str1 = prompt("Enter a string");
if (str1.substring(0,4)==="Java" || str1.substring(0,4)==="java")
{
    document.write(true);
}
else if (str1.substring(0,4)!=="Java" || str1.substring(0,4)!=="java" || str1.length<4)
{
    document.write(false);
}