// A função registrClient é ativada quando o usuário preenche seus dados
// pessoais e clica no botão "fazer meu cadastro".
function registerClient() {
    const form = document.getElementById('client-registration-form').addEventListener('submit', e => {
        e.preventDefault();
        let name = document.getElementById('client-record-name').value;
        let email = document.getElementById('client-record-email').value;
        let phone = document.getElementById('client-record-phone').value;
        let address = {};
        address.street = document.getElementById('client-record-address-street').value;
        address.number = document.getElementById('client-record-address-number').value;
        address.complement = document.getElementById('client-record-address-complement').value;
        address.city = document.getElementById('client-record-address-city').value;
        address.state = document.getElementById('client-record-address-state').value;
        address.zipCode = document.getElementById('client-record-address-zip-code').value;
        
        let inputData = {
            name,
            email,
            phone,
            address
        }
    
        let clientData = JSON.stringify(inputData);
        localStorage.setItem('Cliente', clientData);

        document.getElementById('client-registration-form').innerHTML = `<br><h3>Cadastro Realizado</h3><br>`
    })
}


function registerProduct() {
    const form = document.getElementById('product-registration-form').addEventListener('submit', e => {
        e.preventDefault();

        let inputData = {
            productName: document.getElementById('product-record-name').value,
            productPrice: document.getElementById('product-record-price').value,
            productDescription: document.getElementById('product-record-description').value          
        }
    
        let productData = JSON.stringify(inputData);
        localStorage.setItem('Produto', productData);

        let recordSuccessful = document.getElementById('product-registration-form');
        recordSuccessful.innerHTML = `<br><h3>Produto Cadastrado</h3><br>`
    })
}