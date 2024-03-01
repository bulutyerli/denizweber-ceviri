import { groq } from "next-sanity";

export const aboutMeQuery = groq`*[_type == "aboutme"][0]`;

export const serviceQuery = groq`*[_type == "service"] | order(_createdAt desc)`;

export const portfolioQuery = groq`*[_type == "portfolyo"]|order(orderRank)`;

export const reviewsQuery = groq`*[_type == "review"]|order(orderRank)`;
