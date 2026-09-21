module.exports = async function (context, req) {
    context.log('HTTP trigger function GetMessage processed a request.');

    // Azure Static Web Apps injects the authenticated client principal into this header
    const header = req.headers['x-ms-client-principal'];
    let user = null;

    if (header) {
        try {
            const encoded = Buffer.from(header, 'base64');
            user = JSON.parse(encoded.toString('ascii'));
        } catch (e) {
            context.log.error('Error decoding client principal', e);
        }
    }

    const userName = user ? (user.userDetails || 'Người dùng đã đăng nhập') : 'Khách vãng lai';

    context.res = {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            greeting: `Xin chào ${userName}!`,
            message: "Dữ liệu này được trả về từ Azure Functions (Serverless Backend) kết hợp với Azure Static Web Apps!",
            serverTime: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
            authenticated: !!user,
            userRoles: user ? user.userRoles : ['anonymous'],
            runtime: 'Node.js / Azure Functions v4'
        }
    };
};
