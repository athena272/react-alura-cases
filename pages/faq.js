import Link from "../src/components/Link"

// export async function getStaticProps() {
export async function getServerSideProps() {
    const FAQ_API_URL = await fetch('https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json')
    const faqData = await FAQ_API_URL.json()

    return {
        props: {
            faqData
        } // will be passed to the page component as props
    }
}

export default function FAQPage({ faqData }) {
    console.log("🚀 ~ FAQPage ~ faqData:", faqData)
    // const [faq, setFaq] = useState([])
    // useEffect(() => {
    // }, [])

    return (
        <div>
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link
                href={'/'}
            >
                Ir para a página HOME
            </Link>
            <ul>
                {
                    faqData.map(({ answer, question }, index) => (
                        <li key={index}>
                            <article>
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </article>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}