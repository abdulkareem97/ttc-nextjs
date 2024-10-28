// import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";
// import ScrollToTop from "./ScrollToTop";
// import HomeDark from "./Views/HomeDark";
import Head from "next/head";
import axios from "axios";
import HomeDark from "@/components/Views/HomeDark";
import ScrollToTop from "@/components/ScrollToTop";
import { PortfolioCell } from "@/components/PortfolioCell";
// import { gql, useQuery } from "@apollo/client"; // Import Apollo Client

const FIND_PORTFOLIO_QUERY = `
  query FindPortfolioQuery($id: String!) {
    clientInfo: clientInfoClientId(client: $id) {
      id
      client
      details
      created_at
      updated_at
      extra
      userId
    }
  }
`;


const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="border-t-8 border-yellow-500 border-solid rounded-full h-16 w-16 animate-spin"></div>
  </div>
);

const Empty = () => <div>Empty</div>;

const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
);



const page = async ({ params }) => {
    const { id } = await params;

    // console.log('\n\n\n\n\n\n\n\n\n\n\n\n',id)
    // console.log('hello')
    let clientInfo

    try {
      const data = await axios.post("https://www.taptocontact.com/api/graphql", {
        query: FIND_PORTFOLIO_QUERY,
        variables: { id },
      });

    //   console.log(data.data)
  
       clientInfo = data?.data?.data.clientInfo || null;
    } catch (error) {
      return <div>Error loading data: {error.message}</div>;
    }
  
    const pageTitle = clientInfo.details.name;
    const pageDescription =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eaque hic quibusdam? Magni at voluptatem maxime? Esse iure odio odit magni reiciendis consequuntur placeat atque, asperiores, qu";
    const pageImage = clientInfo.details.profileImage;
    const pageUrl = `https://www.taptocontact.com/portfolio/${clientInfo.client}`;
  
    // Initialize AOS only on the client side
    // if (typeof window !== "undefined") {
    //   AOS.init({ duration: 1200 });
    // }
  
    return (
      <>
      {/* hello */}
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:image" content={pageImage} />
          <meta property="og:url" content={pageUrl} />
        </Head>

        <PortfolioCell clientInfo={clientInfo} id={id} />
        {/* <HomeDark userDetail={clientInfo.details} client={id} /> */}
        {/* <ScrollToTop /> */}
      </>
    );
  };


export default page;

