const tail = function(array) {
  let arrTail = array;
  arrTail = arrTail.slice(1);
  return arrTail;
};

module.exports = tail;