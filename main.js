const form = document.getElementById('atividade-form')
const imafeliz='<img src="./images/aprovado.png" alt=" emoji comemorando"></td>'
const imatrist='<img src="./images/reprovado.png" alt=" emoji decepcionado"></td>'
const notas=[]
const atividades=[]
const notaminima= parseFloat(prompt('Digite a nota minima:'))
let linhas =''
aprovadolabel='<span class="resultado aprovado">Aprovado</span>'
reprovadolabel='<span class="resultado reprovado">Reprovado</span>'
form.addEventListener('submit', function(e){
    e.preventDefault()
    adicionaliha()
    atualizatable()
    atualizamediafinal()
})

function adicionaliha(){
    const inputNomeAtividade= document.getElementById('nome-atividade')
    const inputNotaAtividade= document.getElementById('nota-atividade')
    
    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade "${inputNomeAtividade.value}" ja foi inserida.`)
    }else{
        notas.push(parseFloat(inputNotaAtividade.value))
        atividades.push(inputNomeAtividade.value)

        let linha = '<tr>'
        linha +=`<td>${inputNomeAtividade.value}</td>`
        linha +=`<td>${inputNotaAtividade.value}</td>`
        linha +=`<td>${inputNotaAtividade.value >= notaminima ? imafeliz : imatrist }</td>`
        linha +='</tr>'
        linhas += linha
    }
    inputNotaAtividade.value=''
    inputNomeAtividade.value=''
}

function atualizatable(){
    const corpoTabela =document.querySelector('tbody')
    corpoTabela.innerHTML =linhas
}

function atualizamediafinal() {
    const mediafinal= calculamedianotas()
    document.getElementById('media-final-nota').innerHTML=mediafinal
    document.getElementById('media-final-resultado').innerHTML=mediafinal>=notaminima ? aprovadolabel : reprovadolabel

}

function calculamedianotas(){
    let somanotas = 0
    for(let i=0;i<notas.length;i++){
        somanotas+=notas[i]
    }
    return media= somanotas/notas.length
}