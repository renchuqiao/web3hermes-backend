import * as fs from 'fs';

export function getAddrs(): any {
    const f = '/Users/rachelren/Documents/web3hermes-contracts/addresses.json';
    const json = fs.readFileSync(f, 'utf8');
    const addrs = JSON.parse(json);
    return addrs;
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';