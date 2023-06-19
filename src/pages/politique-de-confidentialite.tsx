import Layout from '@/components/Layout'

const policyPoints = [
  {
    title: 'Introduction',
    content:
      "BeatsFlow s'engage à respecter et à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre application.",
  },
  {
    title: 'Collecte des informations',
    content:
      'Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, faites un achat, participez à un concours, et / ou lorsque vous vous déconnectez. Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone, et / ou carte de crédit.',
  },
  {
    title: 'Utilisation des informations',
    content:
      'Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour : Personnaliser votre expérience et répondre à vos besoins individuels, Fournir un contenu publicitaire personnalisé, Améliorer notre site Web, Améliorer le service client et vos besoins de prise en charge, Vous contacter par e-mail, Administrer un concours, une promotion, ou un enquête.',
  },
  {
    title: 'Confidentialité du commerce en ligne',
    content:
      'Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n’importe quel raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et / ou une transaction, comme par exemple pour expédier une commande.',
  },
  {
    title: 'Divulgation à des tiers',
    content:
      'Nous ne vendons, n’échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.',
  },
  {
    title: 'Protection des informations',
    content:
      'Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne. Les ordinateurs et serveurs utilisés pour stocker des informations personnelles identifiables sont conservés dans un environnement sécurisé.',
  },
  {
    title: 'Consentement',
    content:
      'En utilisant notre site, vous consentez à notre politique de confidentialité.',
  },
]

export default function PolitiqueDeConfidentialite() {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-6">
        <h1 className="text-center text-4xl font-bold my-6">
          Politique de Confidentialité
        </h1>
        <div className="prose lg:prose-lg mx-auto">
          <ol>
            {policyPoints.map((point, idx) => (
              <li key={idx} className="my-8">
                <h3 className="font-bold text-xl">{point.title}</h3>
                <p>{point.content}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Layout>
  )
}
