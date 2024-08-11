document.getElementById('queryForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const query = document.getElementById('query').value;
    const responseDiv = document.getElementById('response');
    responseDiv.innerText = 'Fetching responses...';

    // Załaduj model GPT-2
    const model = await tf.loadGraphModel('https://cdn.jsdelivr.net/npm/@tensorflow-models/gpt2/model.json');
    
    // Generuj odpowiedź
    const result = await model.predict(query); // Pseudokod, dostosuj w zależności od API
    
    responseDiv.innerText = result; // Dostosuj formatowanie odpowiedzi
});
