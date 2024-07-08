document.addEventListener('DOMContentLoaded', function() {
    function getDictionaryIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('dictionaryId');
    }

    function loadDictionary() {
        const dictionaryId = getDictionaryIdFromURL();
        // ここに辞書データの読み込みと表示のロジックを追加
    }

    loadDictionary();
});
