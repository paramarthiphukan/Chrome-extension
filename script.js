fetch('https://icanhazsimileface.com/slack')
    .then(data => data.json())
    .then(faceData => {
        const faceText = faceData.attachments[0].text;
        const faceElement = document.getElementById('simileElement');

        faceElement.innerHTML = faceText;
    })
