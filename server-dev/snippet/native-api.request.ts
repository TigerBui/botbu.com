const https = require('follow-redirects').https;

interface optionsRequest {
    method: string,
    hostname: string,
    path: string,
    headers: object,
    maxRedirects: number
}

const NativeApiRequest = (options: optionsRequest, callback: FunctionStringCallback) => {
    const req = https.request(options, (res: any) => {
        let chunks: any = [];

        res.on("data", (chunk: any) => {
            chunks.push(chunk);
        });

        res.on("end", (chunk: any) => {
            var body = Buffer.concat(chunks);
            callback(body.toString());
        });

        res.on("error", (error: any) => {
            callback(error.toString());
        });
    });

    req.end();
}

export { NativeApiRequest };