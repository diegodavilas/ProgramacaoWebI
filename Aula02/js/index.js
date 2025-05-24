function clearForm(){
    document.getElementById('contactForm').reset()
}
function saveForm(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;
    
    //verifica se já existem dados salvos no localStorage
    let savedData = JSON.parse(localStorage.getItem('formData')) || []

    //cria um objeto com os dados do formulário
    const formData = {
        name: name,
        email: email, 
        password: password,
        message: message
    }

    //adiciona os dados ao Array
    savedData.push(formData)

    //salvar o array atualizado no localStorage
    localStorage.setItem('formData', JSON.stringify(savedData));

    //exibe um alerta de sucesso
    alert("Formulário salvo com sucesso");
    clearForm();
}