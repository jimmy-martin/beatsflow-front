import Layout from '@/components/Layout'

const terms = [
  {
    title: "Acceptation des conditions générales d'utilisation",
    content:
      "L'utilisation de l'application BeatsFlow est régie par les présentes conditions générales d'utilisation. En utilisant l'application, vous reconnaissez avoir lu et accepté ces conditions.",
  },
  {
    title: 'Services offerts',
    content:
      "L'application BeatsFlow offre à ses utilisateurs [description des services offerts par l'application].",
  },
  {
    title: 'Inscription',
    content:
      "Pour utiliser l'application, vous devrez vous inscrire et fournir des informations personnelles. Vous vous engagez à fournir des informations exactes et à les mettre à jour en cas de modifications.",
  },
  {
    title: 'Confidentialité',
    content:
      'Les informations personnelles que vous fournissez lors de votre inscription sont confidentielles. Elles ne seront en aucun cas transmises à des tiers.',
  },
  {
    title: 'Responsabilité',
    content:
      "L'application BeatsFlow ne pourra être tenue responsable de tout dommage direct ou indirect survenu suite à l'utilisation de l'application.",
  },
  {
    title: "Modification des conditions générales d'utilisation",
    content:
      "L'application BeatsFlow se réserve le droit de modifier les présentes conditions générales d'utilisation à tout moment. Les utilisateurs seront informés de ces modifications par email.",
  },
]

export default function TermesEtConditions() {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-6">
        <h1 className="text-center text-4xl font-bold my-6">
          Termes et Conditions
        </h1>
        <div className="prose lg:prose-lg mx-auto">
          <ol>
            {terms.map((term, idx) => (
              <li key={idx} className="my-8">
                <h3 className="font-bold text-xl">{term.title}</h3>
                <p>{term.content}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Layout>
  )
}
