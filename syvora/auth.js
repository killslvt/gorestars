const webhookUrl = 'https://discord.com/api/webhooks/1346302973143154741/AS-n3JCdpK3tRoVlgZpNWk8RLSls3WttjGnphacGmTKPGw47a9P1FXLigNdCiKadp8r7';

function sendToDiscord(logMessage) {
    const payload = {
        content: logMessage
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            console.log('Log message successfully sent to Discord');
        } else {
            console.error('Failed to send log message to Discord:', response.status, response.statusText);
        }
    })
    .catch(error => {
        console.error('Error sending log message to Discord:', error);
    });
}

function receiveLogData() {
    // Check if the request is a POST
    if (window.location.search) {
        const urlParams = new URLSearchParams(window.location.search);
        const logMessage = urlParams.get('logMessage');
        if (logMessage) {
            sendToDiscord(decodeURIComponent(logMessage));
        }
    } else {
        // Handle POST request
        const body = JSON.parse(window.body || "{}");
        const logMessage = body.logMessage;
        if (logMessage) {
            sendToDiscord(logMessage);
        }
    }
}

window.onload = receiveLogData;
