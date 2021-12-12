import type { MetaFunction } from "remix";
import { TopCryptos } from "~/components/TopCryptos";

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
        <p>
          Decentralized blockchain system ethereum decentralized, network wallet
          key miners ledger ledger miners system DeFi. USDC smart financial
          finance cryptocurrency bitcoin bitcoin financial. Crypto decentralized
          USDC finance smart address mining ethereum financial. Bitcoin finance
          DeFi cryptocurrencies system, miners decentralized crypto bitcoin
          bitcoin. USDC bitcoin currency currency miners wallet address
          transaction blockchain, bitcoin system cryptocurrency DeFi. Contracts
          finance cryptocurrency, finance wallet currency finance currency
          mining contracts key mining crypto. DeFi cryptocurrencies crypto
          currency ethereum miners system. Bitcoin DAI USDC transaction USDC
          cryptocurrency ethereum. Finance system financial key DeFi
          cryptocurrency finance smart.
        </p>
      </aside>
      <TopCryptos/>
    </div>
  );
}
