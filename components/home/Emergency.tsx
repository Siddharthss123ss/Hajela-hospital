import { PhoneCall } from "lucide-react";

export default function Emergency() {
  return (
    <section className="py-16 bg-white">

      <div className="container-custom">

        <div
          className="
          bg-gradient-to-r
          from-red-600
          to-red-500
          rounded-[30px]
          px-8
          py-8
          lg:px-14
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-8
          shadow-2xl
          "
        >

          {/* LEFT */}

          <div>

            <p className="text-red-100 font-medium mb-2">
              24/7 Emergency Support
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Need Immediate Medical Assistance?
            </h2>

          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-5">

            {/* ICON */}

            <div
              className="
              w-16
              h-16
              rounded-full
              bg-white/20
              flex
              items-center
              justify-center
              "
            >

              <PhoneCall
                size={30}
                className="text-white"
              />

            </div>

            {/* CONTACT */}

            <div>

              <p className="text-red-100 text-sm">
                Emergency Helpline
              </p>

              <h3 className="text-3xl font-bold text-white">
                +91 98765 43210
              </h3>

            </div>

            {/* BUTTON */}

            <button
              className="
              ml-4
              bg-white
              text-red-600
              px-7
              py-3
              rounded-full
              font-semibold
              hover:bg-red-100
              transition-all
              duration-300
              "
            >
              Call Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}