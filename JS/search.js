// 猫の情報を配列で定義
let cats = [
  {
    name: '海（うみ）', location: '東京都', personality: '甘えん坊', img: '../img/cats/umi 2.jpg', age: 5, jender: '女の子', type: 'マンチカン', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: '空(そら)', location: '東京都', personality: '甘えん坊', img: '../img/cats/sora.jpeg', age: '6', jender: '男の子', type: 'ポメラニアン'
  },
  { name: 'キキ', location: '北海道', personality: '甘えん坊', img: '../img/cats/kiki.jpg', age: '12', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext' },
  {
    name: 'まる', location: '福岡県', personality: '甘えん坊', img: '../img/cats/maru.jpg', age: '4', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'ブー', location: '福岡県', personality: '甘えん坊', img: '../img/cats/bu-.jpg', age: '8', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'みー', location: '東京都', personality: '人が大好き', img: '../img/cats/mi-.jpg', age: '5', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  { name: 'もふ', location: '北海道', personality: '人が大好き', img: '../img/cats/mohu.jpg', age: '7', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext' },
  { name: 'ねね', location: '北海道', personality: '甘えん坊', img: '../img/cats/nene.jpg', age: '3', jender: '', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext' },
  {
    name: 'たま', location: '東京都', personality: '人が大好き', img: '../img/cats/tama.jpg', age: '9', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'ネル', location: '福岡県', personality: '甘えん坊', img: '../img/cats/neru.jpg', age: '12', jender: '男の子', type: '女の子', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'レオ', location: '福岡県', personality: '野生派タイプ', img: '../img/cats2/photo-1511694009171-3cdddf4484ff.jpeg', age: '5', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'きなこ', location: '東京都', personality: '野生派タイプ', img: '../img/cats2/photo-1545315171-cc80c905c252.jpeg', age: '10', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'むぎ', location: '北海道', personality: '甘えん坊', img: '../img/cats2/photo-1638826595775-e2eae86cda8e.jpeg', age: '8', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'ルナ', location: '北海道', personality: '野生派タイプ', img: '../img/cats2/photo-1638826596253-45c356e832bf.jpeg', age: '13', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'ラテ', location: '東京都', personality: '引っ込み思案', img: '../img/cats3/calmness-g44ffdd400_640.jpg', age: '6', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'ベル', location: '福岡県', personality: '引っ込み思案', img: '../img/cats3/cat-g12833497f_640.jpg', age: '9', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'ここ', location: '北海道', personality: '引っ込み思案', img: '../img/cats3/cat-g12833497f_640.jpg', age: '3', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'ルイ', location: '東京都', personality: '野性派タイプ', img: '../img/cats3/relaxation-gef56a588f_640.jpg', age: '4', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'マロン', location: '東京都', personality: '野性派タイプ', img: '../img/cats4/2670442_s.jpg', age: '5', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'うに', location: '北海道', personality: '甘えん坊', img: '../img/cats4/3848209_s.jpg', age: '7', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: 'ルル', location: '福岡県', personality: '引っ込み思案', img: '../img/cats4/cat-gb47a1e0e1_640.jpg', age: '2', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  },
  {
    name: '琥琥（こはく）', location: '東京都', personality: '引っ込み思案', img: '../img/cats4/kat-g2da8cdb7e_640.jpg', age: '3', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext'
  }
];

$(document).ready(function() {
  // ページが読み込まれた後に実行される処理
  
  const container = $('#search_card-container'); // カードを表示するコンテナの要素を取得します
  const catsPerPage = 8; // 1ページあたりに表示する猫の数を設定します
  const totalPages = Math.ceil(cats.length / catsPerPage); // 総ページ数を計算します
  
  // カードを表示する関数
  function displayCats(page) {
    container.empty(); // コンテナを空にします
    const startIndex = (page - 1) * catsPerPage; // 開始インデックスを計算します
    const endIndex = startIndex + catsPerPage; // 終了インデックスを計算します
    const catsToDisplay = cats.slice(startIndex, endIndex); // 表示する猫の配列を取得します
    
    // 猫の配列をループ処理してカードを作成し、コンテナに追加します
    catsToDisplay.forEach(function(cat) {
    const card = createCatCard(cat); // カードを作成する関数を呼び出します
    container.append(card); // カードをコンテナに追加します

    });
  }
  
  // カードを作成する関数
  function createCatCard(cat) {

  
  // 猫の情報を使ってカードの要素を作成します
  const card = $('<div>').addClass('cat-card');
  card.attr('id', cat.name);
  const image = $('<img>').attr('src', cat.img);
  const nameElement = $('<p>').text(cat.name);
    
  const locationElement = $('<p>').text(cat.location);
  const ageElement = $('<p>').text(cat.age + '歳');
  const typeElement = $('<p>').text(cat.type);
  const commentElement = $('<p>').text(cat.comment);
  
  // お気に入り登録ボタンの要素を作成します
    const favoriteButton = $('<button>').text('♡');


  // お気に入り登録の切り替え処理を呼び出します
  favoriteButton.on('click', function() {
    toggleFavorite(cat);
  });
  
  // カード内のdivを定義する
  const cardContent = $('<div>').addClass('card-content');
  const cardName = $('<div>').addClass('cardName');
  const cardAge = $('<div>').addClass('cardAge');
  const cardFavorite = $('<div>').addClass('cardFavorite');
  cardName.append(nameElement);
  cardName.append(locationElement);
  cardAge.append(ageElement);
  cardAge.append(typeElement);
  cardFavorite.append(favoriteButton);
  //cardContentに要素を追加する
  cardContent.append(cardName);
  cardContent.append(cardAge);
  cardContent.append(cardFavorite);
  // cardContent.append(commentElement);
  
  // カードにimageとcardContentを追加します
  card.append(image);
  card.append(cardContent);
  
  return card; // 作成したカードを返します
  }
  
  // お気に入りの切り替え処理を定義します
  function toggleFavorite(cat) {
    
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const i = favorites.findIndex(function(favorite) {
      return favorite.name === cat.name;
    });

    if (i === -1) {
      // 既にお気に入りに登録されていない場合
      if (favorites.length < 8) {
        // favorites配列にcat要素を追加
        favorites.push(cat);
        console.log('お気に入り登録:', cat.name);
        console.log(favorites);
      } else {
        // お気に入り登録上限の場合
        alert('お気に入り登録は8匹までです');
        console.log('お気に入り登録上限は8匹までです');
      }
    } else {
      // 既にお気に入りに登録されている場合
      favorites.splice(i, 1);// favorites配列からcat要素を削除
      console.log('お気に入り解除:', cat.name);
      console.log(favorites);
    }

    // 更新されたfavorites配列をlocalStorageに保存
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }


  // 初期表示は最初のページを表示します
  displayCats(1);
  
  // ページネーションを作成する関数
  function createPagination() {
    const paginationContainer = $('<div>').addClass('pagination-container');
    
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = $('<a>').text(i);
      pageLink.attr('href', 'javascript:void(0)');
      pageLink.click(function() {
        displayCats(i);
      });
      paginationContainer.append(pageLink);
    }
    
    return paginationContainer;
  }
  
  // 初期表示は最初のページを表示します
  displayCats(1);
  
  // ページネーションを作成して表示します
  const pagination = createPagination();
  container.before(pagination);

  // この部分で他の処理を追加することもできます


  
  // ページネーションを作成する関数
  function createPagination() {
    const paginationContainer = $('<div>').addClass('pagination-container');
    
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = $('<a>').text(i);
      pageLink.attr('href', 'javascript:void(0)');
      pageLink.click(function() {
        displayCats(i);
      });
      paginationContainer.append(pageLink);
    }
    
    return paginationContainer;
  }
}); 
  
  


// 猫の情報を検索する
function searchByName(name) {
  let result = cats.filter(cat => cat.name === name);
// 検索結果を表示する処理
}




// お気に入り一覧ボタンを押した時の処理
$("#favorite-index-button").on("click", function () {
  const container = $('#favorite-container');
  // カードを表示するコンテナの要素を取得します
  $("#search_card-container").fadeOut();
  $(".pagination-container").fadeOut();
  $("#favorite-index-button").fadeOut();
  $("#back").fadeIn();
  

  container.fadeIn();
  container.css("display", "flex");

  const favoritesPerPage = 8; // 1ページあたりに表示する猫の数を設定します
      
  // カードを表示する関数
  function displayFavorites(page) {
    const startIndex = (page - 1) * favoritesPerPage; // 開始インデックスを計算します
    const endIndex = startIndex + favoritesPerPage; // 終了インデックスを計算します
    // 表示するお気に入りの配列を取得します
    const favoritesToDisplay = JSON.parse(localStorage.getItem('favorites')) || [];
    // 猫の配列をループ処理してカードを作成し、コンテナに追加します
    favoritesToDisplay.forEach(function (favorite) {
      const card = createFavoriteCard(favorite);
      // カードを作成する関数を呼び出します
      container.append(card);
      // カードをコンテナに追加します
    });
  }
  // カードを作成する関数
  function createFavoriteCard(favorite) {

    // 猫の情報を使ってカードの要素を作成します
    const card = $('<div>').addClass('favorite-card');
    const image = $('<img>').attr('src', favorite.img);
    const nameElement = $('<p>').text(favorite.name);
    const locationElement = $('<p>').text(favorite.location);
    const ageElement = $('<p>').text(favorite.age + '歳');
    const typeElement = $('<p>').text(favorite.type);
    const commentElement = $('<p>').text(favorite.comment);
  
    // お気に入り登録ボタンの要素を作成します
    const favoriteButton = $('<button>').text('♡').attr('id', 'favorite-button');
    // favoriteButton.setAttribute('id', favorite-button);


    // お気に入り登録の切り替え処理を呼び出します
    favoriteButton.on('click', function () {
      toggleFavorite(favorite);
    });

    // カード内のdivを定義する
    const cardContent = $('<div>').addClass('card-content');
    const cardName = $('<div>').addClass('cardName');
    const cardAge = $('<div>').addClass('cardAge');
    const cardFavorite = $('<div>').addClass('cardFavorite');
    cardName.append(nameElement);
    cardName.append(locationElement);
    cardAge.append(ageElement);
    cardAge.append(typeElement);
    cardFavorite.append(favoriteButton);
    //cardContentに要素を追加する
    cardContent.append(cardName);
    cardContent.append(cardAge);
    cardContent.append(cardFavorite);
    // cardContent.append(commentElement);
  
    // カードにimageとcardContentを追加します
    card.append(image);
    card.append(cardContent);
  
    return card; // 作成したカードを返します
  }
  displayFavorites(1);

  function toggleFavorite(cat) {
    
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const i = favorites.findIndex(function(favorite) {
      return favorite.name === cat.name;
    });

    if (i === -1) {
      // 既にお気に入りに登録されていない場合
      if (favorites.length < 8) {
        // favorites配列にcat要素を追加
        favorites.push(cat);
        console.log('お気に入り登録:', cat.name);
        console.log(favorites);
      } else {
        // お気に入り登録上限の場合
        alert('お気に入り登録は8匹までです');
        console.log('お気に入り登録上限は8匹までです');
      }
    } else {
      // 既にお気に入りに登録されている場合
      favorites.splice(i, 1);// favorites配列からcat要素を削除
      console.log('お気に入り解除:', cat.name);
      console.log(favorites);
    }

    // 更新されたfavorites配列をlocalStorageに保存
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }


});

// 戻るボタンを押した時にページを更新する
$("#back").on("click", function () {
  location.reload();
});

  