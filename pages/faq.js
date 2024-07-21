import Head from "next/head"
import Link from "../src/components/Link"
import PageTitle from "../src/components/PageTitle"
import FAQScreen from "../src/screens/FAQScreen"

// export async function getStaticProps() {
export async function getServerSideProps() {
    const FAQ_API_URL = await fetch('https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json')
    const faq = await FAQ_API_URL.json()

    return {
        props: {
            faq
        } // will be passed to the page component as props
    }
}

export default FAQScreen

// export default function FAQPage({ faqData }) {
//     console.log("🚀 ~ FAQPage ~ faqData:", faqData)
//     // const [faq, setFaq] = useState([])
//     // useEffect(() => {
//     // }, [])

//     return (
//         <div>
//             <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
//             <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
//             <Link
//                 href={'/'}
//             >
//                 Ir para a página HOME
//             </Link>
//             <ul>
//                 {
//                     faqData.map(({ answer, question }, index) => (
//                         <li key={index}>
//                             <article>
//                                 <h2>{question}</h2>
//                                 <p>{answer}</p>
//                             </article>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }