// https://oj.haizeix.com/problem/186

function f(i, arr, n) {
  if (i >= n) return 0
  return f(i + arr[i], arr, n) + 1
}

function main(n) {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10))
  }

  console.log(arr)
  console.log(f(0, arr, n))
}

main(5)
