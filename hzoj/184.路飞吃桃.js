// https://oj.haizeix.com/problem/184

function peachCount(day) {
  if (day === 1) return 1
  return (peachCount(day - 1) + 1) * 2
}

console.log(peachCount(2))
console.log(peachCount(3))
