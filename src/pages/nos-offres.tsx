import Layout from '@/components/Layout'

export default function NosOffres() {
  const plans = [
    {
      name: 'Gratuit',
      description:
        'Si vous êtes un beatmaker débutant dans le domaine de la musique ou si vous souhaitez simplement essayer la plateforme Beats Flow.',
      price: 0,
      features: ['30% de commission', '10 uploads', 'Paiement par Stripe'],
    },
    {
      name: 'Édition Standard',
      description:
        "Si vous êtes un beatmaker désireux de développer votre activité et d'accéder à certaines fonctionnalités.",
      price: 7,
      features: [
        '10% de commission',
        '30 uploads',
        'Paiement par Stripe',
        'Messages privés avec les acheteurs/vendeurs',
      ],
    },
    {
      name: 'Édition Pro',
      description:
        'Si vous êtes un beatmaker cherchant à développer rapidement votre activité en utilisant une boutique en ligne personnalisée,',
      price: 15,
      features: [
        '0% de commission',
        'Uploads illimités',
        'Paiement par Stripe',
        'Messages privés avec les acheteurs/vendeurs',
      ],
    },
  ]

  return (
    <Layout>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl text-center">
              Nos offres
            </h3>
          </div>
          <div className="mt-8 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2 bg-gray-100"
              >
                <div className="text-center text-gray-800">
                  <span className="text-xl font-bold">{item.name}</span>
                  <div className="mt-2 text-sm">{item.description}</div>
                  <div className="mt-4 text-gray-800 text-3xl font-semibold">
                    {item.price} &euro;
                    <span className="text-xl font-normal">/mois</span> (
                    {item.price * 12} &euro;
                    <span className="text-xl font-normal">/an</span>)
                  </div>
                </div>
                <ul className="py-8 space-y-3">
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-800"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul>
                <div className="flex-1 flex items-end">
                  <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-beatsflow-green hover:bg-beatsflow-green-hover active:bg-green-800">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
