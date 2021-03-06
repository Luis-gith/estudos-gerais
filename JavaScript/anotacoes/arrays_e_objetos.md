## Arrays

### Técnica do Spread

![](https://github.com/Luis-gith/estudos-gerais/blob/main/JavaScript/anotacoes/imagens/exemplo-spread.JPG?raw=true)

O que era considerado um array vira um elemento independente. No caso acima, há presença de três elementos no array e três parâmetros na função. Dessa maneira o `console.log` associará, os conteúdos do array aos parâmetros, respeitando a ordem em que foram declarados.

+ **OBS:** usando essa técnica, é possível deixar o código mais leve. Um dos exemplos seria na utilização dos elemento de um array para realizar um soma que, se posta da maneira comum, precisaria da definição uma variável para cada elemento do array.

  ![](https://github.com/Luis-gith/estudos-gerais/blob/main/JavaScript/anotacoes/imagens/ex2-spread.JPG?raw=true)

  

### Técnica do Rest

Essa funcionalidade permite que a função receba um número indefinido de argumentos, e os armazena num array.

![](https://github.com/Luis-gith/estudos-gerais/blob/main/JavaScript/anotacoes/imagens/ex-rest.JPG?raw=true)





## Objetos

### Object Destructuring

É possível filtrar um argumento de dentro de uma função, de forma que não seja necessário percorrer e obter todos os dados dela. 

![](https://github.com/Luis-gith/estudos-gerais/blob/main/JavaScript/anotacoes/imagens/obj-destructuring.JPG?raw=true)

+ Nesse caso, foi filtrado de `'user'` apenas o necessário, `id` e `full name`, enquanto `displayName` não foi mostrado. 

  + Confia que esse trem é bão. 

    > Fonte: Datafolha e IBGE.







## Métodos de array

### .map:

Retorna um novo array, realizando as operações em ordem de index de cada elementodo array mapeado.

+ Possíveis retornos 
  + Callback: função a ser executada em cada elemento
  + thisArg(opcional) [pouco utilizado, mas é interessante ler sobre]



### .forEach

Faz tudo que o .map faz, mas precisa de estar dentro de uma constante para utilizar o resultado.



### .filter

Cria um novo array e retorna apenas os itens filtrados. 

![image-20220609181317683](C:\Users\Lipe\AppData\Roaming\Typora\typora-user-images\image-20220609181317683.png)





### .reduce

Executa uma função em todos os elementos do array, retornando um valor único, diferente do inicial.





