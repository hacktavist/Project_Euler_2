var fib_num = 0,
    next = 1,
    last = 0,
    temp = 0;

while(last < 4000000) {
  temp = next + last;

  
  if(last % 2 === 0 && last < 4000000){
    fib_num += last;
  }
  next = last;
  last = temp;
  
}

console.log(fib_num);