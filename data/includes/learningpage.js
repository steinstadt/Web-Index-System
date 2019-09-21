// wix learning pageの設定
(function($){
  // body内のタグをdivタグで囲む
  $('body').wrapInner('<div id="wix-main">');

  // 拡張エリアの作成
  function createLearningArea(){
    // 学習エリアの作成
    var learningArea = document.createElement('div');
    learningArea.id = 'wix-learning-main';

    // フォームの作成(learningForm)
    var learningForm = document.createElement('div');
    learningForm.id = 'wix-learning-form';
    var formLabel = document.createElement('h2');
    formLabel.innerText = "検索フォーム";
    learningForm.appendChild(formLabel); // textLabel -> learningForm

    // 調べた単語の履歴(learningHistory)
    var learningHistory = document.createElement('div');
    learningHistory.id = 'wix-learning-history';
    var historyLabel = document.createElement('h2');
    historyLabel.innerText = "調べた単語";
    var historyList = document.createElement('ul');
    historyList.id = 'wix-learning-list';
    learningHistory.appendChild(historyLabel);
    learningHistory.appendChild(historyList);

    // 要素の結合
    learningArea.appendChild(learningForm); // learningForm -> learningArea
    learningArea.appendChild(learningHistory); // learningHistory -> learningArea

    $('body').append(learningArea);
  }

  createLearningArea();

})(window.jQuery190)
