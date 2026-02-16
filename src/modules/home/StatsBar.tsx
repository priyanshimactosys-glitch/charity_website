import { Users, Globe, Clock, Calendar } from "lucide-react";

export default function StatsBar() {
  return (
    <div className="absolute left-1/2 -bottom-16 -translate-x-1/2 w-[90%] max-w-6xl">

      <div className="bg-white shadow-xl rounded-2xl p-6">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">

          <Stat icon={<Users />} value="585+" label="Volunteers" />
          <Stat icon={<Globe />} value="920+" label="Programs" />
          <Stat icon={<Users />} value="915.5" label="People Served" />
          <Stat icon={<Clock />} value="6 Hours" label="Volunteer Hours" />
          <Stat icon={<Calendar />} value="4 Events" label="Events Hosted" />

        </div>

        {/* Bottom CTA */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">

          <CTA text="Services" color="bg-blue-600" />
          <CTA text="Book Appointment" color="bg-red-600" />
          <CTA text="Room Rental" color="bg-green-600" />

        </div>

      </div>

    </div>
  );
}

function Stat({ icon, value, label }: any) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-red-600">{icon}</div>
      <h3 className="font-bold">{value}</h3>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

function CTA({ text, color }: any) {
  return (
    <button className={`${color} text-white py-3 rounded-md font-semibold`}>
      {text}
    </button>
  );
}
