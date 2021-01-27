function characterCnt(password){

  let cnt = 0

  if (!password.match(/[A-Z]/)) {
      cnt = cnt +1
      console.log("Uppercase matched")
  }
  if(!password.match(/[a-z]/)) {
      cnt = cnt +1
      console.log("lowercase matched")
  }
  if((!password.match(/[0-9]/))){
      console.log("digits matched")
      cnt = cnt +1
  }
  //  for special character
  if((!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/))){  
      cnt = cnt +1
      console.log("special Character matched")
  }

  if((cnt + password.length) < 6){
    cnt = cnt + 6 - (cnt + password.length)
  }

  return cnt;
}

str1 = "Him@"
let result1  = characterCnt(str1)
console.log("the  first result is ",result1)


str2 = "Yes@1234567"
let result2  = characterCnt(str2)
console.log("the  second result is ",result2)


str3 = "im@456"
let result3  = characterCnt(str3)
console.log("the  second result is ",result3)