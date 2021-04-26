/******************************************************************************
 *  Execution       : default node          : cmd> node HttpReq.js
 *
 *
 *  @Purpose         : JavaScript basic questions
 *
 *  @file           : HttpReq.js
 *  @overview       : learn http and https requets
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 26-Apr-2021
 *
 ******************************************************************************/
const http = require('http');
const https = require('https');
const fs = require('fs');

const file = fs.readFileSync('data.json', 'utf8');

/**
 * The callback takes the response—res in the example—which can listen for events that fire during the response.

This example focuses on two key events. The data event and the end event. Because the response comes as a readable stream, we need to assemble it. For stringified responses you can build a string. Alternately, it may be a good idea to push to an array and then use a buffer to assemble the result like we do in the createServer article.

Each time the data event fires we append to a string. Finally, when the end event fires we log the result. At the end of the call, we chain the end() method. This is a required part of the request, and without it the API call will not fire.
 */
https.get("https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json", res => {
    let data = ""

    res.on("data", d => {
        data += d
    })
    res.on("end", () => {
        //  console.log(data)
    })
})