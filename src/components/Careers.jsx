import React from 'react'

const positions = [
  {
    id: 1,
    title: "Co-Founder/Business Development Lead",
    description: `IKFT World - worldwide first provider of the lean, cloud-based, agentic FinTech infrastructure is looking for a Co-Founder, who will take care of the business development.

If you understand the FinTech landscape, can get a lead to a customer and ready to start working for equity until pre-seed - drop us an email at bizdev@ikft.world
`,
    location: "Remote",
    type: "part-time",
    contact: "mailto:bizdev@ikft.world?subject=Application%20for%20",
  }
];


export default function Careers() {
  return (
    <section id="careers" className="py-16 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl text-slate-600 dark:text-slate-300 font-bold">Join Our Team</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          We’re looking for mission-driven builders to help us make banks and fintechs truly agentic.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {positions.map(role => (
            <div
              key={role.id}
              className="p-6 border rounded-lg bg-white text-slate-600 dark:bg-slate-800 card-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold dark:text-slate-300">{role.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{role.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>{role.location}</span>
                <span>{role.type}</span>
              </div>
              <div className="mt-4">
                <a
                  href={`${role.contact}${encodeURIComponent(role.title)}`}
                  className="inline-block px-4 py-2 text-white bg-primary rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Apply now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

