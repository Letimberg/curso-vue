<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>
            Nome do Usuário: <strong>{{ inverterNome() }}</strong>
            <button @click="reiniciarNome">ReiniciarNome</button>
            <button @click="reiniciarNome">Reiniciar nome (Callback)</button>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            // required: true,
            default: "Anônimo",
            //     default : function () {
            //         return Array(10).fill(0).join(',')
            //     }
            // }
        },
    },
    methods: {
        inverterNome() {
            return this.nome.split("").reverse().join("");
        },
        reiniciarNome() {
            this.nome="Pedro"
            this.$emit('nomeMudou', this.nome)
        },
        reiniciarFn: Function
    },
};
</script>

<style scoped>
.componente {
    flex: 1;
    background-color: #ec485f;
    color: #fff;
}
</style>
