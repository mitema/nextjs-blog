import Head from 'next/Head'
import Link from 'next/Link'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1> First Post </h1>
                <h2> 
                    <Link href = "/">Back to home</Link>
                </h2>
        </Layout>
    )


}