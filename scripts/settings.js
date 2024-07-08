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
        const dictionarySettings = JSON.parse(localStorage.getItem('dictionarySettings')) || {};
        dictionarySettings[settings.dictionaryId] = settings;
        localStorage.setItem('dictionarySettings', JSON.stringify(dictionarySettings));
        alert('Settings saved successfully!');
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
