// QBUPSELLER/qbupseller/website-scraper/fetchHTML.js
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function fetchHtml(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching HTML:', error);
  }
}

function extractData(html) {
  const $ = cheerio.load(html);
  const data = [];

  // Replace these selectors with the actual CSS selectors for your website
  $('.question').each((index, element) => {
    const question = $(element).text();
    const answer = $(element).next('.answer').text();
    data.push({ question, answer });
  });

  return data;
}

function saveToJson(data) {
  fs.writeFileSync('help_data.json', JSON.stringify(data, null, 2));
}

async function main() {
  const url = 'https://quickbooks.intuit.com/learn-support/en-us'; // Replace with the actual URL
  console.log('Fetching HTML...');
  const htmlContent = await fetchHtml(url);
  console.log('HTML Content:', htmlContent.substring(0, 500)); // Print the first 500 characters

  const extractedData = extractData(htmlContent);
  saveToJson(extractedData);
}

main();
