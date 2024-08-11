document.getElementById('queryForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const query = document.getElementById('query').value;
    const responseDiv = document.getElementById('response');
    responseDiv.innerText = 'Fetching responses...';

    try {
        // Załaduj model GPT-2
        const model = await tf.loadGraphModel('https://cdn.jsdelivr.net/npm/@tensorflow-models/gpt2/model.json');

        // Użyj modelu do generowania odpowiedzi
        // Pseudokod: przetwarzanie zapytania i generowanie odpowiedzi
        const inputs = tf.tensor([query]); // Przykładowe przetwarzanie
        const output = model.predict(inputs);
        const response = output.dataSync(); // Pseudokod: synchronizacja danych

        responseDiv.innerText = response; // Dostosuj formatowanie odpowiedzi
    } catch (error) {
        responseDiv.innerText = 'An error occurred: ' + error.message;
    }
});
