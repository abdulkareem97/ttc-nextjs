import Head from "next/head";
import axios from "axios";
import { PortfolioCell } from "@/components/PortfolioCell";

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

async function fetchClientInfo(id) {
  try {
    const response = await axios.post("https://www.taptocontact.com/api/graphql", {
      query: FIND_PORTFOLIO_QUERY,
      variables: { id },
    });
    return response.data.data.clientInfo;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const clientInfo = await fetchClientInfo(id);
  
    if (!clientInfo) {
      return {
        title: "Error",
        description: "Error loading data",
      };
    }
  
    return {
      title: clientInfo.details.name || "Default Title",
      description: "Lorem ipsum dolor sit amet...",
      openGraph: {
        title: clientInfo.details.name,
        description: clientInfo.details.companyName +' - '+clientInfo.details.designation,
        images: [
          {
            url: clientInfo.details.profileImage || "/default-image.jpg",
            width: 800,
            height: 600,
            alt: clientInfo.details.name,
          },
        ],
        url: `https://www.taptocontact.com/portfolio/${clientInfo.client}`,
      },
    };
  }

const Page = async ({ params }) => {
  const { id } = await params;
  const clientInfo = await fetchClientInfo(id);

  if (!clientInfo) {
    return <div>Error loading data.</div>;
  }

//   const pageTitle = clientInfo.details.name || "Default Title";
//   const pageDescription = "Lorem ipsum dolor sit amet...";
//   const pageImage = clientInfo.details.profileImage || "/default-image.jpg";
//   const pageUrl = `https://www.taptocontact.com/portfolio/${clientInfo.client}`;

  return (
    <>
      

      <PortfolioCell clientInfo={clientInfo} id={id} />
    </>
  );
};

export default Page;
