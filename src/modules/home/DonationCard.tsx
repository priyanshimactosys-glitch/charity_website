export default function DonationCard() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-5 text-black w-full">

      {/* Tabs */}
      <div className="flex mb-4 overflow-hidden rounded-md border">
        <button className="flex-1 py-2 bg-gray-200 font-medium">
          Give once
        </button>

        <button className="flex-1 py-2 bg-red-600 text-white font-medium">
          Monthly
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-3">
        Choose an amount to give per month
      </p>

      {/* Amount Buttons */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <AmountBtn value="$10" />
        <AmountBtn value="$20" />
        <AmountBtn value="$40" active />
        <AmountBtn value="$100" />
      </div>

      <button className="w-full bg-red-600 text-white py-3 rounded-md font-semibold">
        Join Today
      </button>

      <p className="text-xs text-gray-500 mt-3">
        Your $40 monthly donation can give 12 people clean water.
      </p>

    </div>
  );
}

function AmountBtn({ value, active = false }: any) {
  return (
    <button
      className={`py-2 border rounded-md font-medium
        ${active ? "bg-red-600 text-white" : "hover:bg-gray-100"}
      `}
    >
      {value}
    </button>
  );
}
