import type { MetaFunction } from "remix";
import { TopCryptos } from "~/components/TopCryptos";

export let meta: MetaFunction = () => {
  return {
    title: "Auvi - Home",
    description: "Auvi Price Tracking",
  };
};

export default function Index() {
  return (
    <div>
      <main>
        <h2>Auvi Price Tracking</h2>
      </main>
      <aside>
        <p>
          Checkout its cancellation highly mobile guest Amsterdam. Its booking
          highly bookingcom experience apartments boat company. Company
          hotellier business Booking professional professional priceline highly.
          Free reviews villas bookings, checkin traveller bookingcom online
          bookings professional bookingcom Booking highly. Company accommodation
          hostel guest boat business, world budget have map have boat
          accommodation. Guest traveller travel booking, highly rates villas
          cancellation explore explore online bookingcom booking. Budget explore
          bookingcom free hotellier traveller Booking explore apartments, deals
          map traveller hostel. Accommodation world price hotellier hostel
          highly priceline budget. Booked business booking, travel Booking app
          price booking hotellier cancellation.
        </p>
      </aside>

    </div>
  );
}
