import Link from "next/link";
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
// import  from '/images/next-profile.jpg';

//Layout
import Layout from '../../components/layout';

export default function FirstPost () {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <Script 
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyload"
                    onLoad={() => console.log('facebook sdk loaded successfully')}
                />
                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>

                <Image src={'/images/next-profile.jpg'} height={144} width={144} alt="profile" />

            </Layout>
        </>
    )
}