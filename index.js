function startNFCReader() {
    const reader = new NDEFReader();

    reader.scan().then(() => {
        console.log("NFC-Reader gestartet.");

        reader.onreading = event => {
            const tag = event.message.records[0];
            const data = tag.data ? new TextDecoder().decode(tag.data) : "Keine Daten gefunden";
            document.getElementById('output').innerText = "Gelesene Daten: " + data;
        };
    }).catch(error => {
        console.error("Fehler beim Starten des NFC-Readers:", error);
        document.getElementById('output').innerText = "Fehler beim Starten des NFC-Readers";
    });
}
