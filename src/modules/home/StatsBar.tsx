import Image from "next/image";

export default function StatsBar() {
  return (
    <div className="absolute left-1/2 -bottom-16 -translate-x-1/2 w-[90%] max-w-6xl">

      <div className="bg-white shadow-xl rounded-2xl p-10">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="flex">
            <Stat
              icon={
                <Image
                  src="/images/volunteer.png"
                  alt="Secure Payment"
                  width={51}
                  height={53}
                  priority
                />
              }
              value="585+"
              label="Volunteers"
            />
          </div>
          <div className="flex justify-around">
            <StatDivider offset="-top-2" />
            <Stat
              icon={
                <Image
                  src="/images/program.png"
                  alt="Secure Payment"
                  width={54}
                  height={54}
                  priority
                />
              }
              value="920+"
              label="Programs"
            />
          </div>
          <div className="flex justify-around">
            <StatDivider offset="top-6" />
            <Stat
              icon={
                <Image
                  src="/images/people.png"
                  alt="Secure Payment"
                  width={54}
                  height={56}
                  priority
                />
              }
              value="915.5"
              label="People Served"
            />
          </div>
          <div className="flex justify-around">
            <StatDivider offset="top-11" />

            <Stat
              icon={
                <Image
                  src="/images/time.png"
                  alt="Secure Payment"
                  width={45}
                  height={45}
                  priority
                />
              }
              value="6 Hours"
              label="Volunteer Hours"
            />
          </div>
          <div className="flex justify-around">
            <StatDivider offset="-top-2" />

            <Stat
              icon={
                <Image
                  src="/images/event.png"
                  alt="Secure Payment"
                  width={40}
                  height={40}
                  priority
                />
              }
              value="4 Events"
              label="Events Hosted"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">

          <CTA text="Services" color="bg-[#0160BC]" />
          <CTA text="Book Appointment" color="bg-primary" />
          <CTA text="Room Rental" color="bg-[#2E7D32]" />

        </div>

      </div>

    </div>
  );
}

function Stat({ icon, value, label }: any) {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="text-red-600">{icon}</div>
      <div className="flex flex-col items-start">
        <h3 className="font-semibold text-2xl">{value}</h3>
        <p className="text-base text-text">{label}</p>
      </div>
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
function StatDivider({ offset = "-top-3" }: { offset?: string }) {
  return (
    <div className="hidden md:flex items-center relative ">
      <div className="w-px h-13 bg-gray-300"></div>

      <span
        className={`absolute left-2.1 -translate-x-1/2 w-2.5 h-2.5 bg-red-600 rounded-full ${offset}`}
      />
    </div>
  );
}
