import { getTxEventParams, SYSTEM_TYPES_IDS } from '@/utils/index';
import { ActionTree, ActionContext } from 'vuex';
import { RootState, Avatars } from '../types';
import Web3 from 'web3';

export const actions: ActionTree<Avatars, RootState> = {
    async AVATARS_balanceOf(context: ActionContext<Avatars, RootState>, payload: { address: string }) {
        const { Avatars, Address } = context.getters;
        try {
            const balance = await Avatars.methods.balanceOf(payload.address).call({ from: Address });
            context.commit('SET_AVATAR_BALANCE', { address: payload.address, balance });
        } catch (err) {
            console.log(err);
        }
    },
    async AVATARS_totalSupply(context: ActionContext<Avatars, RootState>) {
        const { Avatars, Address } = context.getters;
        try {
            const totalSupply = await Avatars.methods.totalSupply().call({ from: Address });
            context.commit('SET_AVATAR_TOTALSUPPLY', { totalSupply });
        } catch (err) {
            console.log(err);
        }
    },
    async AVATARS_setup(context: ActionContext<Avatars, RootState>) {
        const { Avatars, Address } = context.getters;
        try {
            console.log('setup');
            await context.dispatch('AVATARS_totalSupply');
        } catch (err) {
            console.log(err);
        }
    },
    async AVATARS_tokenOfOwnerByIndex(
        context: ActionContext<Avatars, RootState>,
        payload: { address: string; indexes: string[] }
    ) {
        const { Avatars, Address } = context.getters;

        try {
            const tokenOfOwnerByIndexP = [];
            for (let i = 0; i < payload.indexes.length; i++) {
                tokenOfOwnerByIndexP[i] = Avatars.methods
                    .tokenOfOwnerByIndex(Address, payload.indexes[i])
                    .call({ from: Address });
            }

            const tokens = await Promise.all(tokenOfOwnerByIndexP);
            for (let i = 0; i < payload.indexes.length; i++) {
                context.commit('SET_AVATAR_TOKEN', { address: payload.address, index: i, token: tokens[i] });
            }
        } catch (err) {
            console.log(err);
        }
    },
    async AVATARS_buy(context: ActionContext<Avatars, RootState>, payload: { amount: number }) {
        const { Avatars, Address, Web3 } = context.getters;
        try {
            await Avatars.methods
                .mint(payload.amount.toString())
                .send({
                    from: Address,
                    value: Web3.utils.toWei((0.015 * payload.amount).toString(), 'ether')
                });
            await context.dispatch('AVATARS_setup');
        } catch (err) {
            console.log(err);
        }
    },
    async AVATARS_buyMulti(context: ActionContext<Avatars, RootState>, payload: { amount: string }) {
        const { Avatars, Address } = context.getters;
        try {
            await Avatars.methods.buyMulti(payload.amount).call({ from: Address });
        } catch (err) {
            console.log(err);
        }
    }
};
