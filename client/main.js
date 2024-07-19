
const run = async () => {
    const root = document.querySelector('.counter');
    const incButton = root.querySelector('.inc');
    const decButton = root.querySelector('.dec');
    const displayResult = root.querySelector('.display_res');

    

    const updateDisplay = async () => {
        const {data} = await axios.get('/display_res');
        displayResult.innerHTML = data;
    };
    await updateDisplay();

    incButton.addEventListener('click', async () => {
    axios.get('/inc');
    await updateDisplay();

    });
    decButton.addEventListener('click', async () => {
        axios.get('/dec');
        await updateDisplay();
        });
     
}

run();
