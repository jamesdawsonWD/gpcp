<template>
    <div class="section1">
        <Header />
        <section>
            <div class="header">
                <h1>{{ AVATARS_getTotalSupply == '' ? '?' : AVATARS_getTotalSupply }} / 5000</h1>
                <h1>
                    GUINEA PIG<br />
                    COSTUME PARTY SOLD
                </h1>

                <h4>
                    I want
                    <input type="number" id="quantity" name="quantity" min="1" max="5" v-model="numTokens" />
                    guinea pig<span v-if="numTokens > 1">s</span> please!
                </h4>
                <Button
                    buttonStyle="primary"
                    :title="'MINT ' + (0.015 * numTokens).toFixed(3) + ' Ξ'"
                    @clicked="openMint()"
                />
            </div>
        </section>
        <side1 class="side1" />
        <side2 class="side2" />
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import web3 from 'Web3';
import Button from '@/components/generics/Button.vue';
import Header from '@/components/Header.vue';
import side1 from '@/assets/svg/Guineapig-side1.svg';
import side2 from '@/assets/svg/Guineapig-side2.svg';

// import Button from '@/components/generics/Button.vue';
export default {
    name: 'LandingPage',
    computed: {
        ...mapGetters(['ST_getAll', 'Address', 'TOKEN_balanceOf', 'AVATARS_getTotalSupply'])
    },
    data() {
        return {
            numTokens: 1
        };
    },
    watch: {
        // whenever question changes, this function will run
        numTokens(newQuestion, oldQuestion) {
            if (newQuestion > 20) {
                this.numTokens = 20;
            }
            if (newQuestion == undefined || newQuestion == '') {
                this.numTokens = 1;
            }
        }
    },
    methods: {
        ...mapActions(['TOKENS_balanceOf', 'UIM_openModal', 'AVATARS_buy']),
        openMint() {
            this.AVATARS_buy({ amount: this.numTokens });
        }
    },
    components: {
        Button,
        Header,
        side1,
        side2
    }
};
</script>
<style lang="scss">
@import '@/styles';

.section1 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    z-index: 4;

    background: radial-gradient(
        circle,
        rgba(18, 20, 48, 1) 0%,
        rgba(8, 9, 25, 1) 73%,
        rgba(8, 9, 25, 1) 100%
    );
    @include breakpoint(mobileonly) {
        .side2 {
            display: none;
        }
        .side1 {
            display: none;
        }
        .header {
            width: 400px;
            h4 {
                margin-top: 100px;
            }
        }
        .scrolldown {
            position: absolute;
            opacity: 0;
            bottom: -20px;
            left: 0;
            right: 0;
        }
    }
    @include breakpoint(tablet) {
        .side1 {
            height: 40%;
            bottom: -20px;
            left: -100px;
        }
        .side2 {
            height: 40%;
            bottom: -20px;
            right: -100px;
        }
        .header {
            width: 500px;
            h4 {
                margin-top: 100px;
            }
        }
    }
    @include breakpoint(phablet) {
        .side1 {
            height: 40%;
            bottom: -20px;
            left: -100px;
        }
        .side2 {
            height: 40%;
            bottom: -20px;
            right: -100px;
        }
        .header {
            width: 500px;
            h4 {
                margin-top: 150px;
            }
        }
    }

    @include breakpoint(laptop) {
        .side2 {
            height: 60%;
            bottom: -20px;
            right: -100px;
        }
        .header {
            width: 500px;
        }

        .side1 {
            height: 60%;
            bottom: -20px;
            left: -100px;
        }
    }
    @include breakpoint(desktop) {
        .side2 {
            height: 70%;
            bottom: -20px;
            right: -100px;
        }
        .side1 {
            height: 70%;
            bottom: -20px;
            left: -100px;
        }
        .header {
            width: 800px;
        }
    }
    section {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .side1 {
        position: absolute;
    }
    .side2 {
        position: absolute;
    }
    .header {
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h2 {
            margin-top: 70px;
        }

        button {
            width: 300px;
            margin-top: 50px;
        }
    }

    .sub-title {
        color: var(--offset-white);
    }
}

.scrolldown {
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    opacity: 1;
}
.arrow {
    margin-top: 10px;
    transform: scale(0.6);
    path {
        fill: var(--button-color);
    }
}
</style>
