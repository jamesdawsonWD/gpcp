const GPCP = artifacts.require('GPCP.sol');
module.exports = async function(deployer, _network, accounts) {
    await deployer.deploy(
        GPCP,
        'Guinea Pig Costume Party',
        'GPCP',
        'ipfs://QmQKiBwJTYHuTsVnTkpqk7ATzBeKD3VmhReQpifwdMB2HX/',
        'ipfs://QmQKiBwJTYHuTsVnTkpqk7ATzBeKD3VmhReQpifwdMB2HX/'
    );
    const gpcp = await GPCP.deployed();
};
