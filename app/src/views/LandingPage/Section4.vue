<template>
    <div class="section4">
        <div class="section-content">
            <div class="info">
                <div class="text">
                    <h2>
                        THE TEAM
                    </h2>
                    <p class="sub-title">
                        We have a dedicated team bringing your the cutest and chunkiest Guinea Pigs available
                        today! Get in touch with us on Discord!
                    </p>
                </div>
            </div>
            <div class="team">
                <div class="item" v-for="(item, index) in team" :key="index">
                    <img :src="require(`@/assets/img/` + item.image)" />
                    <div class="name-info">
                        <h3>{{ item.name }}</h3>
                        <a v-if="item.twitter != ''" :href="item.twitter"><twitter class="twitter-logo"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import web3 from 'Web3';
import twitter from '@/assets/svg/twitter.svg';

// import Button from '@/components/generics/Button.vue';
export default {
    name: 'Section4',
    data() {
        return {
            team: [
                {
                    name: 'James',
                    twitter: 'https://www.twitter.com/mr_nft1',
                    image: 'jamesavatar.jpg'
                },
                {
                    name: 'Rami',
                    twitter: '',
                    image: '6.png'
                },
                {
                    name: 'Andrew',
                    twitter: 'https://www.twitter.com/adawson111',
                    image: '4.png'
                },
                {
                    name: 'Gareth',
                    twitter: 'https://www.twitter.com/gdawson771',
                    image: '8.png'
                },
                {
                    name: 'Declan',
                    twitter: 'https://www.twitter.com/pl0xy',
                    image: 'declan.png'
                }
            ]
        };
    },
    computed: {
        ...mapGetters(['ST_getAll', 'Address', 'TOKEN_balanceOf'])
    },
    methods: {
        ...mapActions(['TOKENS_balanceOf'])
    },
    components: {
        twitter
    }
};
</script>
<style lang="scss">
@import '@/styles';

.section4 {
    position: relative;
    background: var(--foreground-color);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    width: 100%;
    padding-bottom: 150px;
    flex-direction: column;

    .twitter-logo {
        &:hover {
            cursor: pointer;
            path {
                fill: var(--button-color);
            }
        }
    }
    .section-content {
        margin-top: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .info {
            display: flex;
            flex-direction: column;
            height: 100%;
            text-align: center;
            justify-content: space-between;

            .text {
                display: flex;
                flex-direction: column;
            }
            p {
                color: white;
            }
        }

        .team {
            display: grid;
            margin-top: 100px;
            grid-gap: 50px 100px;
            align-items: center;
            justify-content: center;
            .item {
                display: flex;
                flex-direction: column;
                align-items: center;

                img {
                    height: 300px;
                    width: 300px;
                }
                .name-info {
                    margin-top: 10px;
                    height: 70px;

                    width: 300px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    svg {
                        height: 50px;
                        width: 50px;
                    }
                }
            }
        }
        h2 {
            color: var(--button-color);
            font-size: 55pt;
            line-height: 30px;

            span {
                color: var(--button-color);
            }
        }

        button {
            width: 300px;
        }
    }
    section {
        background: white;
    }

    @include breakpoint(mobileonly) {
        .section-content {
            width: 400px;
            .sub-title {
                width: 300px;
            }
            .team {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
    @include breakpoint(tablet) {
        .section-content {
            width: 700px;
            .sub-title {
                width: 500px;
            }
            .team {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }
    @include breakpoint(phablet) {
        .section-content {
            width: 450px;
            .sub-title {
                width: 400px;
            }
            .team {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }

    @include breakpoint(laptop) {
        .section-content {
            width: 1000px;

            .info {
                display: flex;
                flex-direction: column;
                height: 100%;
                text-align: center;
                justify-content: space-between;

                .text {
                    display: flex;
                    flex-direction: column;
                }
                p {
                    color: white;
                }
            }
            .sub-title {
                width: 700px;
            }
            .team {
                grid-template-columns: repeat(2, 1fr);
                width: 100%;
                .item {
                }
            }
        }
    }
    @include breakpoint(desktop) {
        .section-content {
            width: 1300px;

            text-align: center;

            .info {
                display: flex;
                flex-direction: column;
                height: 100%;
                text-align: center;
                justify-content: space-between;

                .text {
                    display: flex;
                    flex-direction: column;
                }
                p {
                    color: white;
                }
            }
            .sub-title {
                width: 800px;
            }
            .team {
                grid-template-columns: repeat(3, 1fr);
                width: 100%;

                .item {
                    align-items: center;
                }
            }
        }
    }
}
</style>
