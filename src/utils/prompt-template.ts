import { PromptTemplate } from "@langchain/core/prompts";

const template = ` Use the following pieces of context to answer the question at the end.
// If you don't know the answer from the context, just say that you don't know, don't try to make up an answer give the exact what is in the context.
Always must answer in the same language as the question and generate html response with extra and bold size for headings and li for lists and breaks for spacing.
only answer the html response part not any other text like html:  or anything else.
{context}

Question: {question}

Helpful Answer:`;

const promptTemplate = PromptTemplate.fromTemplate(template);

export {promptTemplate};