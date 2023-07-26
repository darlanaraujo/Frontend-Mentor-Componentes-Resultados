# Frontend Mentor - Solução de componente de resumo de resultados

Esta é uma solução para o [desafio do componente de resumo de resultados no Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Índice

- [Visão geral](#visão-geral)
   - [O desafio](#o-desafio)
   - [Captura de tela](#captura-de-tela)
   - [Links](#links)
- [Meu processo](#meu-processo)
   - [Construído com](#construído-com)
   - [O que aprendi](#o-que-aprendi)
   - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
   - [Recursos úteis](#useful-resources)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

**Observação: exclua esta observação e atualize o sumário com base nas seções que você mantém.**

## Visão geral
O projeto desse desafio é mais focado na estilização, para isso foi usado o SCSS que permite uma maneira mais avançada do CSS. Outro ponto é o uso do Json, que nesse caso foi algo simples, mas ainda assim um bom recurso para entender o funcionamento da ferramenta.

### O desafio

Os usuários devem ser capazes de:

- Veja o layout ideal para a interface, dependendo do tamanho da tela do dispositivo
- Veja os estados de foco e foco para todos os elementos interativos na página

### Captura de tela

[Tela 1](assets/img/tela1.png)
[Tela 2](assets/img/tela2.png)
[Tela 3](assets/img/tela3.png)

### Links

- URL da solução: [Adicionar URL da solução aqui](https://github.com/darlanaraujo/Frontend-Mentor-Componentes-Resultados)
- URL do site ao vivo: [Adicione URL do site ao vivo aqui](https://darlanaraujo.github.io/Frontend-Mentor-Componentes-Resultados/)

## Meu processo
Projeto desenvolvido sem o uso de biblioteca, apenas HTML, SCSS e Js puro.

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas SCSS
- JS
- Importação de modulos
- Uso de Include, Mixin, Content entre outros recursos de CSS avançado
- Fluxo de trabalho móvel primeiro

### O que eu aprendi

Sempre que utilizo o SCSS em meus projetos me faz conhecer mais a texnologia, um recurso muito bom de usar para trabalhar a responsividade da página é criar um modulo separado do projeto apenas para mobile utilizando o @mixin e definindo os tamanhos desejados, depois basta usar o @include na folha de estilo principal e definir as propriedades desejadas.

```html

```
```css
@mixin mobile {
    @media (max-width: 450px) {
        @content;
    }
}

@include mobile {
   transition: 1s all;
   font-size: 20px;
}
```
```js
listaJson.forEach((item, index) => {
    icons[index].src = item.icon;
    categorys[index].innerText = item.category;
    scores[index].innerText = item.score;
});
```

### Desenvolvimento contínuo

### Recursos úteis

## Autor

- Website - [Darlan Araujo](https://www.darlanaraujo.com.br)
- Frontend Mentor - [@darlanaraujo](https://www.frontendmentor.io/profile/darlanaraujo)
- YouTube - [@DarlanPAraujo](https://www.youtube.com/@DarlanPAraujo)
- GitHub - [@darlanaraujo](https://github.com/darlanaraujo)


## Agradecimentos

O Senhor é bom!