//can use exports.(funcname) OR module.exports = {} and put the funcs in the braces
//also....module.exports = {} is for es5 while export default is for es6

//for multiple funcs


let grab = function() {
  let date = new Date();
  let month = `${date.getMonth() + 1}`
  let day = `${date.getDate()}`
  let year = `${date.getFullYear()}`
  return (`Today is ${month} ${day} ${year}`)
}

/*
module.exports = {
  grab
}
*/
export default {
  grab
}
