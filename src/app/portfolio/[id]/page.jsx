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

const Page = async ({ params }) => {
  const { id } = await params;
  const clientInfo = await fetchClientInfo(id);

  if (!clientInfo) {
    return <div>Error loading data.</div>;
  }

  const pageTitle = clientInfo.details.name || "Default Title";
  const pageDescription = "Lorem ipsum dolor sit amet...";
  const pageImage = clientInfo.details.profileImage || "/default-image.jpg";
  const pageUrl = `https://www.taptocontact.com/portfolio/${clientInfo.client}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={'pageDescription'} />
        <meta property="og:title" content={'pageTitle'} />
        <meta property="og:description" content={'pageDescription'} />
        <meta property="og:image" content={'pageImage'} />
        <meta property="og:url" content={pageUrl} />
      </Head>

      <PortfolioCell clientInfo={clientInfo} id={id} />
    </>
  );
};

export default Page;
