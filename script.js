function contar () {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)// transforma caixa de texto p/ n°
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<= 0) {
            alert('Passo inválido! Considerando passo mínimo de 1 em 1')
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {// c += p - n° recebe ele mesmo + 'passo'
                res.innerHTML += ` ${c} \u{1F449}`//+= concatenação
            }
        } else {
            for(let c = i; c >= f; c -= p) {// '-=' perde o valor de passo
                res.innerHTML += ` ${c} \u{1F449}`//+= concatenação
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}