
const a = 'my strong bed'
const b = 'lumberjacks'
const c = 'falling trees'

const isogram = (str) => {
        str = str.toLowerCase();
        str= str.split(' ').join('');
        for(i = 0; i < str.length; ++i) {
          for(j = i + 1; j < str.length; ++j) {
            if(str[i] === str[j]) {
              return false;
            }
          }
        }
        return true;
     }
     
  console.log(isogram(a));
  console.log(isogram(b));
  console.log(isogram(c));

  