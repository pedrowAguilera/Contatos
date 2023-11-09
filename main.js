class Contatos{
    constructor(nome, email, telefone, texto){
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.texto = texto
    }
}
class GerenciadorContatos{
    constructor(){
        this.contatos = []
    }

    adcionarContatos(contato) {
        this.contatos.push(contato)
    }

    exibirContatos(){
        const listaContatos = document.querySelector('#contatoLista')
        
        listaContatos.innerHTML =  ''

        for(const contato of this.contatos){
            console.log('oi')
            const li = document.createElement('li')
            li.classList.add('lista')
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - ${contato.texto}`
            listaContatos.appendChild(li)
        }
    }
}
const gerenciadorContatos = new GerenciadorContatos()

const contatoForm = document.getElementById('contatoForm'),
    nomeForm = document.getElementById('nome'),
    emailForm = document.getElementById('email'),
    telForm = document.getElementById('tel'),
    mostrarContatos = document.getElementById('mostrarContatos'),
    ocultarContatos = document.getElementById('ocultarContatos'),
    listaContatos = document.getElementById('contatoLista'),
    textArea = document.getElementById('texto'),
    seta = document.getElementById('arrow')

contatoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let nome = nomeForm.value
    let email = emailForm.value
    let telefone = telForm.value
    let texto = textArea.value
    
    const contato = new Contatos(nome, email, telefone, texto)
    gerenciadorContatos.adcionarContatos(contato)
    
    nomeForm.value = ''
    emailForm.value = ''
    telForm.value = ''
    textArea.value = ''
    console.log(texto)
})

mostrarContatos.addEventListener('click', () => {
    gerenciadorContatos.exibirContatos()
    listaContatos.style.display = 'block'
    seta.classList.add('fa-solid')
    seta.classList.add('fa-arrow-down')
    
})
ocultarContatos.addEventListener('click', () => {
    listaContatos.style.display = 'none'
    seta.classList.remove('fa-solid')
    seta.classList.remove('fa-arrow-down')
})