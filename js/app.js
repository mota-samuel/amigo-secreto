let grupo = [];
function adicionar()
{
    let nome = document.getElementById('nome-amigo');
    if(nome.value == '')
    {
        alert('Adicione um nome a lista...');
        return
    }

    if(grupo.includes(nome.value))
    {
        alert('Amigo já adicionado, insira um novo nome...');
        return;
    }


    let lista = document.getElementById('lista-amigos');
    grupo.push(nome.value);
    
    if(lista.textContent ==''){
        lista.textContent = nome.value;
    }else{
    lista.textContent = `${lista.textContent}, ${nome.value}`;
    }
    nome.value = '';
}

function sortear()
{
    if(grupo.length%2 != 0)
    {
        alert('Voce precisa adicionar mais um amigo a lista!!!');
        return;
    }
    embaralha(grupo);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < grupo.length; i++) {
        if (i == grupo.length-1) {

        } else {
            sorteio.innerHTML = sorteio.innerHTML + grupo[i] + ' --> ' + grupo[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar()
{
    grupo = [];
    document.getElementById('lista-amigos').innerHTML = ' ';
    document.getElementById('lista-sorteio').innerHTML = ' ';
}