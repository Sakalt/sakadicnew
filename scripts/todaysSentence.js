// scripts/todaysSentence.js
// 単語リストの準備
const adjectives = ["美しい", "高い", "新しい", "古い", "小さい", "大きい"];
const suffixes = ["ます", "です", "ません", "でした"];
const subjects = ["私は", "あなたは", "彼は", "彼女は"];
const verbs = ["見る", "行く", "食べる", "飲む"];
const nouns = ["猫", "犬", "本", "車"];

// ランダムに要素を選択する関数
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 例文を生成する関数
function generateSentence() {
    const pattern = Math.floor(Math.random() * 4); // パターンの数に応じて変更

    let sentence = "";

    switch(pattern) {
        case 0:
            // パターン1: 主語 + 形容詞 + 動詞 + 接尾辞
            const subject1 = getRandomElement(subjects);
            const adjective1 = getRandomElement(adjectives);
            const verb1 = getRandomElement(verbs);
            const suffix1 = getRandomElement(suffixes);
            sentence = `${subject1} ${adjective1} ${verb1}${suffix1}。`;
            break;

        case 1:
            // パターン2: 主語 + 名詞 + を + 動詞 + 接尾辞
            const subject2 = getRandomElement(subjects);
            const noun2 = getRandomElement(nouns);
            const verb2 = getRandomElement(verbs);
            const suffix2 = getRandomElement(suffixes);
            sentence = `${subject2} ${noun2}を ${verb2}${suffix2}。`;
            break;

        case 2:
            // パターン3: 主語 + 名詞 + は + 形容詞 + 接尾辞
            const subject3 = getRandomElement(subjects);
            const noun3 = getRandomElement(nouns);
            const adjective3 = getRandomElement(adjectives);
            const suffix3 = getRandomElement(suffixes);
            sentence = `${subject3} ${noun3}は ${adjective3}${suffix3}。`;
            break;

        case 3:
            // パターン4: 名詞 + の + 名詞 + を + 動詞 + 接尾辞
            const noun4_1 = getRandomElement(nouns);
            const noun4_2 = getRandomElement(nouns);
            const verb4 = getRandomElement(verbs);
            const suffix4 = getRandomElement(suffixes);
            sentence = `${noun4_1}の ${noun4_2}を ${verb4}${suffix4}。`;
            break;

        default:
            // デフォルトのパターン (必要に応じて追加)
            sentence = "デフォルトの例文。";
            break;
    }

    return sentence;
}

// 例文を表示する
function displaySentence() {
    const sentenceElement = document.getElementById('today-sentence');
    const sentence = generateSentence();
    sentenceElement.textContent = sentence;
}

// ページ読み込み時に例文を生成して表示する
window.onload = function() {
    displaySentence();
};
