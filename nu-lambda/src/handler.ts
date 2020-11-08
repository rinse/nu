export const message = (event: any, context: any, callback: any) => {
    const response = {
        statusCode: 200,
        body: { message: "Hello, World!" }
    };
    callback(null, response);
};
