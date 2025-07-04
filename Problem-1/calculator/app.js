document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputCalc');
    const buttons = document.querySelectorAll('#boxes .box');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let value = button.textContent;

            switch (value) {
                case 'AC':
                    input.value = '';
                    break;
                case '=':
                    try {
                        const expression = input.value
                            .replace(/x/gi, '*')  // handle both 'x' and 'X'
                            .replace(/%/g, '/100'); // convert % to divide by 100

                        const result = eval(expression);
                        input.value = result;
                    } catch (error) {
                        input.value = 'Error';
                    }
                    break;
                default:
                    input.value += value;
            }
        });
    });
});
