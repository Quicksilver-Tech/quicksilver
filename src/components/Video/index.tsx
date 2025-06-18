const stats = [
  { id: 1, name: 'Years of Domain Expertise', value: '10+' },
  { id: 2, name: 'Client Retention', value: '100%' },
  { id: 3, name: 'Projects Completed', value: '20+' },
  { id: 4, name: 'Experts', value: '10+' }
]

export default function ChooseUs() {
  return (
    <div className="relative isolate overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div
          aria-hidden="true"
          className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div> */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className=" text-3xl sm:text-5xl py-6 font-bold leading-8 text-indigo-600 dark:text-indigo-400 ">Why Choose Us</h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-2xl">
            We Develop software that gives you a  <strong className="">competitive edge </strong> using the <strong className="">latest technologies. </strong>
          </p>
          <p className="mt-6 text-lg leading-8 text-body-color dark:text-body-color-dark">
            Following careful examination of your business needs, our expert team will recommend the best strategy to successfully achieve your goals.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-indigo-600 dark:text-indigo-400 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
              <dt className=" text-base font-semibold leading-6">{stat.name}</dt>
              <dd className="order-first text-3xl sm:text-5xl font-bold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
