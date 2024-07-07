// 統計ページのJavaScript (statistics.js)

// URLパラメータから辞書IDを取得
const urlParams = new URLSearchParams(window.location.search);
const dictionaryId = urlParams.get('id') || 1; // デフォルトで1

// DOM要素
const wordCountElement = document.getElementById('word-count');
const sentenceCountElement = document.getElementById('sentence-count');
const charDistributionChartElement = document.getElementById('charDistributionChart');

// 辞書の統計情報を取得する関数
function loadStatistics() {
    fetch(`load_statistics.php?dictionaryId=${dictionaryId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('統計情報の読み込みに失敗しました');
            }
            return response.json();
        })
        .then(data => {
            // 統計情報を表示する
            wordCountElement.textContent = data.wordCount;
            sentenceCountElement.textContent = data.sentenceCount;
            displayCharDistributionChart(data.charDistribution);
        })
        .catch(error => {
            console.error('エラー:', error);
        });
}

// 文字の割合グラフを表示する関数
function displayCharDistributionChart(charDistribution) {
    new Chart(charDistributionChartElement, {
        type: 'pie',
        data: {
            labels: Object.keys(charDistribution),
            datasets: [{
                data: Object.values(charDistribution),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '文字の割合'
                }
            }
        }
    });
}

// ページ読み込み時に統計情報を読み込む
document.addEventListener('DOMContentLoaded', () => {
    loadStatistics();
});


