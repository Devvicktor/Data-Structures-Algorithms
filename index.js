const fact=(n)=>{
  if(n<1)return 1
  else return n*fact(n-1)
}
console.log('THIS',fact(5));

const factN=(n)=>{
 return n<1? 1:n*factN(n-1)
}
console.log('TERNARY OP',factN(5))