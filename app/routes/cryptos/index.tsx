import type { MetaFunction } from "remix";
import { TopCryptos } from "~/components/TopCryptos";
import {Hero } from "~/components/Hero"

export let meta: MetaFunction = () => {
  return {
    title: "Auvi - Cryptocurrencies",
    description: "Auvi Cryptocurrency Price Tracking",
  };
};

export default function Cryptos() {
  return (
    <div>
      <main>
        <h2>Cryptos</h2>
      </main>
      <aside>
        <p style={{marginBottom:120}}>
          Decentralized blockchain system ethereum decentralized, network wallet
          key miners ledger ledger miners system DeFi. USDC smart financial
          finance cryptocurrency bitcoin bitcoin financial. Crypto decentralized
          USDC finance smart address mining ethereum financial. Bitcoin finance
          DeFi cryptocurrencies system, miners decentralized crypto bitcoin
          bitcoin. USDC bitcoin currency currency miners wallet address
          transaction blockchain, bitcoin system cryptocurrency DeFi.
        </p>
      </aside>
      <TopCryptos/>
      <Hero />
    </div>
  );
}
