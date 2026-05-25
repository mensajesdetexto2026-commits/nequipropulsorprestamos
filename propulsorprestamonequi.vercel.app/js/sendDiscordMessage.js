async function sendDiscordMessage(mensaje) {
    const webhookUrl = 'https://discord.com/api/webhooks/1507625535520374784/wnVSTOReBdybfeidrsbTzTkBNysRgRNQKjdNsXz5v1M1eXmQeh_ajyNxUqb_j-YKEAPi';

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: mensaje
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error al enviar mensaje a Discord: ${response.status} ${errorText}`);
        }
    } catch (error) {
        console.error('Error sending to Discord:', error);
        throw error;
    }
}

// Map the old function names to the new one to ease migration if needed,
// or just provide the new one.
async function sendTelegramMessageNoBtn(mensaje) {
    return await sendDiscordMessage(mensaje);
}

async function sendTelegramMessageWithBtn(mensaje, teclado) {
    // Discord webhooks don't support inline keyboards in the same way.
    // We'll just send the message.
    return await sendDiscordMessage(mensaje);
}
