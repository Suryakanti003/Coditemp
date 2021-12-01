# codeitemp library
this is a fast and secure way to encrypt
### features
1. lightweight
2. fast
3. secure
4. open source
## how to use
add this code to head or script of your html to import codeitemp
```
 <script src="https://cdn.jsdelivr.net/gh/Suryakanti003/Coditemp@main/lib/codeitemp.js"></script>  
```
#### encode
now if you want to encrypt something add this to your javascript
```
var myvar=encode("key",data to encrypt);
```
call this function in a variable you want
replace `key` with 5 digit encryption key of your choice 
##### note- the key should be in text form
replace `data to encrypt` with text or a variable you want.
#### decode
now if you want to decrypt something add this to your javascript
```
var myvar=decode("key",data to decrypt);
```
call this function in a variable you want
replace `key` with 5 digit encryption key of your choice 
##### note- the key should be in text form
replace `data to decrypt` with text or a variable you want.
