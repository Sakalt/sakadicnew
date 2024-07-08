document.addEventListener('DOMContentLoaded', function() {
    const settingsForm = document.getElementById('settings-form');

    if (settingsForm) {
        settingsForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(settingsForm);
            const settings = {
                font: formData.get('font'),
                dictionaryId: getDictionaryIdFromURL()
            };
            saveSettings(settings);
        });
    }

    function saveSettings(settings) {
        const dictionaryId = settings.dictionaryId;
        fetch('settings.json')
            .then(response => response.json())
            .then(data => {
                data[dictionaryId] = settings;
                return data;
            })
            .then(updatedData => {
                localStorage.setItem('dictionarySettings', JSON.stringify(updatedData));
                alert('Settings saved successfully!');
            })
            .catch(error => console.error('Error:', error));
    }

    function getDictionaryIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('dictionaryId');
    }

    function loadSettings() {
        const dictionaryId = getDictionaryIdFromURL();
        const dictionarySettings = JSON.parse(localStorage.getItem('dictionarySettings')) || {};
        const settings = dictionarySettings[dictionaryId];

        if (settings) {
            document.getElementById('font').value = settings.font;
        }
    }

    loadSettings();
});
