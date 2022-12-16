import Head from 'next/head'
// import styles from '../styles/Home.module.css';
// import Link from 'next/Link';
// import Image from 'next/image'
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I am Mitema. I'm a software engineer. You can contact me on <a href="www.facebook.com">Facebook</a></p>
        <p>
          (This is a sample website - you'll be building a site like this on {' '}
          <a href="https://nextjs.org/learn">Our Next.js tutorial</a>
        </p>
      </section>
    </Layout>
  )
}