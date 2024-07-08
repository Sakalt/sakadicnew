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
        fetch('settings.json')
            .then(response => response.json())
            .then(data => {
                data[settings.dictionaryId] = settings;
                return data;
            })
            .then(updatedData => {
                return fetch('settings.json', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedData)
                });
            })
            .then(() => {
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
        fetch('settings.json')
            .then(response => response.json())
            .then
