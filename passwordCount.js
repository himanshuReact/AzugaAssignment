function characterCnt(password){

  let cnt = 0

  if (!password.match(/[A-Z]/)) {
      cnt = cnt +1
  }
  if(!password.match(/[a-z]/)) {
      cnt = cnt +1
  }
  if((!password.match(/[0-9]/))){
      cnt = cnt +1
  }
  //  for special character
  if((!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/))){  
      cnt = cnt +1
  }

  if((cnt + password.length) < 6){
    cnt = cnt + 6 - (cnt + password.length)
  }

  return cnt;
}

str1 = "Him@"
let result1  = characterCnt(str1)
console.log("the  first password is ",str1)
console.log("the  first result is ",result1)


str2 = "Yes@1234567"
let result2  = characterCnt(str2)
console.log("the  second password is ",str2)
console.log("the  second result is ",result2)


str3 = "im@456"
let result3  = characterCnt(str3)
console.log("the  third password is ",str3)
console.log("the  third result is ",result3)