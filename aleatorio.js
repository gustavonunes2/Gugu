export function aleatorio (lista){
    const posicao = Marth.floor(Math.random()* lista.length);
    return lista[posicao];
}