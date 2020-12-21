new Vue({
    el: '#desafio',
    data: {
        nome: 'Letimberg',
        idade: 33
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        }
      
    },
})