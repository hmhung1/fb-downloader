const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeXSMB() {
    try {
        // Lấy nội dung trang web
        const { data } = await axios.get('https://xoso.com.vn/xo-so-mien-bac/xsmb-p1.html');

        // Load HTML vào cheerio để phân tích cú pháp
        const $ = cheerio.load(data);

        // Tìm kiếm kết quả theo selector (sửa selector phù hợp với HTML của trang)
        const results = [];
        $('.kqxs').each((i, element) => {
            const result = $(element).text().trim();
            results.push(result);
        });

        console.log(results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

scrapeXSMB();
