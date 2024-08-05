// need a function to proces uploaded file

const processFile = function() {
    console.log('processing.....')
    const uploaded = document.getElementById('fileUpload')
    const data = uploaded.files[0]
    const results = document.getElementById('results')
    results.innerHTML = ''

    // if data exists
    if (data) {
        console.log('data loaded.....')
        const reader = new FileReader();
        // append
        reader.onload = function(e) {
            // const content = e.target.result.split('\n').map(s => parseInt(s, 10));
            // convert data to array of numbers from string value
            const content = e.target.result.split('\n').map(Number)
            const frequencies = {}
            
            content.forEach(number => {
                if (frequencies[number]) {frequencies[number]++}
                else {frequencies[number] = 1}
            });

            const sortedNums = Object.keys(frequencies).sort((current, next) => {
                
            })
        }

        reader.readAsText(data);
    }
}