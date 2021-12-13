export function TopCryptos() {
  const data = [
    {
      name: "BNB",
      ticker: "BNB",
      lastPrice: "$560.62",
      dailyChange: "-1.06%",
    },
    {
      name: "Bitcoin",
      ticker: "BTC",
      lastPrice: "$49,202.55",
      dailyChange: "1.56%",
    },
    {
      name: "Ethereum",
      ticker: "ETH",
      lastPrice: "$4,035.24",
      dailyChange: "0.08%",
    },
    {
      name: "Polygon",
      ticker: "MATIC",
      lastPrice: "$2.09",
      dailyChange: "-1.32%",
    },
    {
      name: "Terra",
      ticker: "LUNA",
      lastPrice: "$58.49",
      dailyChange: "-7.13%",
    },
    {
      name: "NEAR Protocol",
      ticker: "NEAR",
      lastPrice: "$11.19",
      dailyChange: "14.49%",
    },
    {
      name: "Celo",
      ticker: "CELO",
      lastPrice: "$3.77",
      dailyChange: "2.53%",
    },
    {
      name: "Solana",
      ticker: "SOL",
      lastPrice: "$168.70",
      dailyChange: "-1.33%",
    },
  ];
  return (
    <div>
      <h2>Market trend</h2>
      <table width="100%">
        <thead>
          <tr>
            <th colSpan={2}>Name</th>
            <th>Last Price</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody >
          {data?.map((coin) => (
            <tr key={coin.name}>
              <td style={{width:40 }}>
                <img
                  width="32"
                  height="32"
                  style={{ borderRadius: 50 }}
                  src={`/assets/images/cryptos/${coin.ticker.toLowerCase()}.png`}
                ></img>
              </td>
              <td style={{ textAlign: "left" }}>
                {coin.ticker}
                <p
                  style={{ margin:0,textAlign: "left", fontWeight: "300", fontSize: 11 }}
                >
                 
                  {coin.name}
                </p>
              </td>

              <td>{coin.lastPrice}</td>
              <td>{coin.dailyChange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
