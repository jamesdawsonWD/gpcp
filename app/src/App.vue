<template>
    <div id="app">
        <router-view />
        <Modal v-if="ShowModal" @close="UIM_closeModal" />
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import Modal from '@/components/generics/Modal.vue';
import Header from '@/components/Header.vue';
export default {
    name: 'App',
    computed: {
        ...mapGetters(['ShowModal'])
    },
    components: {
        Modal
    },
    methods: {
        ...mapActions(['setAddress', 'bootstrapContracts'])
    },

    async mounted() {
        await window.ethereum.on('accountsChanged', async accounts => {
            if (accounts[0]) {
                if (this.SignoToken == null) await this.bootstrapContracts();
                await this.setAddress({ address: accounts[0] });
            }
        });

    }
};
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    background-color: var(--bg-color);
    overflow: scroll;
    overflow-x: hidden;
    /* Increase/decrease this value for cross-browser compatibility */
    box-sizing: content-box;
    /* So the width will be 100% + 17px */
}
</style>
