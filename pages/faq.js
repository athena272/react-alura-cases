import { useEffect } from "react"
import Link from "../src/components/Link"

export default function FAQPage() {
    useEffect(() => {
        const fetchFaq = async () => {
            const res = await fetch('https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json')
            const FAQ_API_URL =  await res.json()
            console.log("🚀 ~ fetchFaq ~ FAQ_API_URL:", FAQ_API_URL)
        }

        fetchFaq()
    }, [])

    return (
        <div>
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link
                href={'/'}
            >
                Ir para a página HOME
            </Link>
        </div>
    )
}