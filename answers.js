const reverse = (str) => {
  let newArray = []
  let array = str.split('')
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  return newArray.join('')
}

const reverse2 = (str) => {
  return str.split('').reverse().join('')
}

const reverse3 = (str) => {
  let newStr = ''
  for (let char of str) {
    newStr = char + newStr
  }
  return newStr
}

const fizzBuzz = (n) => {
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}

const reverseInt = (int) => {
  const string = int.toString().replace('-', '')
  let result = ''
  for (let char of string) {
    result = char + result
  }
  if (int < 0) {
    return Number(result) * -1
  } else {
    return Number(result)
  }
}

const reverseInt2 = (int) => {
  const reversed = int
    .toString()
    .split('')
    .reverse()
    .join('')

return parseInt(reversed) * Math.sign(int)
}

const palindrome = (str) => {
  return str === str.split('').reverse().join('')
}

const palindrome = (str) => {
  const arr = str.split('')
  const l = arr.length
  const str1 = arr.slice(0, l / 2).join('')
  const str2 = arr.slice(l / 2, l).reverse().join('')
  return str1 === str2
}

const maxChar = (str) => {
  const mapped = str.split('').reduce((o, e) => {
    !o[e] ? o[e] = 1 : o[e]++
    return o
  }, {})

  const max = Math.max(...Object.values(mapped))
  for (let key in mapped) {
    if (mapped[key] === max) {
      return key
    }
  }
}

const maxChar = (str) => {
  const mapped = str.split('').reduce((obj, ele) => {
    !obj[ele] ? obj[ele] = 1 : obj[ele]++
    return obj
  }, {})
  const max = Math.max(...Object.values(mapped))
  for (let key in mapped) {
    if (mapped[key] === max) {
      return key
    }
  }
}
