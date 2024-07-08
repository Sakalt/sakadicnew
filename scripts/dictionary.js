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
document.addEventListener('DOMContentLoaded', function() {
    function getDictionaryIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('dictionaryId');
    }

    function getPageFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('page') || 1;
    }

    function loadDictionaryPage(dictionaryId, page) {
        // 辞書データの読み込みとページごとの表示ロジックを追加
        // ここでは仮のデータを表示
        document.getElementById('dictionary-content').innerText = `Dictionary ID: ${dictionaryId}, Page: ${page}`;
    }

    const dictionaryId = getDictionaryIdFromURL();
    const page = getPageFromURL();
    loadDictionaryPage(dictionaryId, page);

    document.getElementById('prev-page').addEventListener('click', function() {
        const prevPage = Math.max(1, parseInt(page) - 1);
        window.location.href = `dictionary.html?dictionaryId=${dictionaryId}&page=${prevPage}`;
    });

    document.getElementById('next-page').addEventListener('click', function() {
        const nextPage = parseInt(page) + 1;
        window.location.href = `dictionary.html?dictionaryId=${dictionaryId}&page=${nextPage}`;
    });
});
