'use strict';

let users = {
  names: ['Luke Skywalker', 'Leia Organa', 'Han Solo', 'Chewbacca', 'Yoda']
};

module.exports.setUser = () => {
  let user;
  let current_user = document.querySelector('input[name="current_user"]:checked').value;
 switch(current_user){
  case '1':
    user = users.names[0];
    break;
  case '2':
    user = users.names[1];
    break;
    case '3':
      user = users.names[2];
      break;
    case '4':
      user = users.names[3];
      break;
    case '5':
      user = users.names[4];
      break;
  }
  return user;

};
