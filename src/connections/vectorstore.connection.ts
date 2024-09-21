import { ElasticVectorSearch, ElasticClientArgs } from "@langchain/community/vectorstores/elasticsearch";
import { Client, ClientOptions } from "@elastic/elasticsearch";
import { embedderModel } from "../ml-models/embedder.model";


const elasticConfig: ClientOptions = {
    node: process.env.ELASTIC_URL,
    auth: {
        apiKey: process.env.ELASTIC_API_KEY || (() => { throw new Error("ELASTIC_API_KEY is not defined"); })(),
    }
};

const initVectorStore = async (index) => {
    const elasticClientArgs: ElasticClientArgs = {
        client: new Client(elasticConfig),
        indexName: index,
    };
    const vectorStore = new ElasticVectorSearch(embedderModel, elasticClientArgs);
    return vectorStore;
};

// const initVectorStore = async () => {
//     const vectorStore = new FaissStore(embedderModel, {});
//     return vectorStore;
// };




export { initVectorStore };
