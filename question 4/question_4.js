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
        // run after file has been loaded succesfully
        reader.onload = function(e) {
            // const content = e.target.result.split('\n').map(s => parseInt(s, 10));
            // convert data to array of numbers from string value
            const content = e.target.result.split('\n').map(Number)
            const frequencies = {}
            
            content.forEach(number => {
                if (frequencies[number]) {frequencies[number]++}
                else {frequencies[number] = 1}
            });

            // sort numbers by frequency, and numerically if frequencies are the same
            const sortedNums = Object.keys(frequencies).sort((current, next) => {
                // if frequencies are the same
                if (frequencies[next] === frequencies[current]) {
                    return current - next;
                }
                return frequencies[next] - frequencies[current]
            })

            // display the 5 most frequent numbers
            sortedNums.slice(0, 5).forEach(number => {
                const item = document.createElement('li');
                item.innerHTML = number;
                results.appendChild(item)
            })
        }
        // ensure reader is executed to load data as text
        reader.readAsText(data);
    }
    else {alert("No file selected. Please use the 'Browse...' button.")}
}