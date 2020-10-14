

//  function capitalizeFirstLetters(str){
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }

function capitalizeFirstLetters(string) {
    return string
      .split(' ')
      .map(word => word.substr(0,1).toUpperCase() + word.substr(1,word.length))
      .join(' ');
  };

  module.exports = capitalizeFirstLetters;


