var book = [
  'chinese',
  'english'
];

function saveBooks()
{
  var html = '---' + book.join(",") + '---' ;

  book = [];

  return html;
}

// 了不起的nodejs  此处未成功复现书中情况
console.log(saveBooks());
