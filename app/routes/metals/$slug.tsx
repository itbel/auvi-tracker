import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

export let loader: LoaderFunction = async ({ params }) => {
  console.log("eyy")
  const response = await fetch('https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD')
  const data = await response.json()
  const platform = data.find((a) => a.topo.platform === 'MT5')
  const standardGoldPrice = platform.spreadProfilePrices.find((b) => b.spreadProfile === 'Standard')
  return {name: params?.slug?.toString(), price: standardGoldPrice.ask}
};

export default function MetalSlug() {
  let {name, price} = useLoaderData();
  return (
    <div>
      <h2><span style={{textTransform:'capitalize'}}>{name}</span> - ${price.toString().split('.')[0] + '.' +price.toString().split('.')[1].slice(0,2)}</h2>
    </div>
  );
}