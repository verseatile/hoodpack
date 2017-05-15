//can use exports.(funcname) OR module.exports = {} and put the funcs in the braces

//for multiple funcs


let grab = function() {
  let date = new Date();
  let month = `${date.getMonth() + 1}`
  let day = `${date.getDate()}`
  let year = `${date.getFullYear()}`
  return (`Today is ${month} ${day} ${year}`)
}


module.exports = {
  grab
}
