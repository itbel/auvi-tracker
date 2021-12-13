import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

export let loader: LoaderFunction = async ({ params }) => {
  return params?.slug?.toString()
};

export default function CryptoSlug() {
  let name = useLoaderData();
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}