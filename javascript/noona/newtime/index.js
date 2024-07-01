const apiKey = `b601dc8f4ca74300ae27c7d99e388c8d`;
let newsList = [];
const menus = document.querySelectorAll('.tab button');
const searchBtn = document.querySelector('.search button');
let url;
let totalResults = 0;
let page = 1;
const pageSize = 10;
const groupSize = 5;

menus.forEach((menu) =>
    menu.addEventListener('click', (event) => getNewsByCategory(event))
);

searchBtn.addEventListener('click', () => getNewsByKeyword());

const getNews = async () => {
    try {
        url.searchParams.set('page', page);
        url.searchParams.set('pageSize', pageSize);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (response.status == 200) {
            if (data.articles.length === 0) {
                throw new Error('검색된 내용이 없습니다.');
            }
            newsList = data.articles;
            totalResults = data.totalResults;
            render();
            paginationRender();
        } else {
            throw new Error(data.message);
        };
    } catch (error) {
        errorRender(error.message);
    }
}

const getLatestNews = async () => {
    url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`);
    getNews();
}

const getNewsByCategory = async (event) => {
    let category = event.target.textContent.toLowerCase();
    url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${apiKey}`);
    getNews();
}

const getNewsByKeyword = async () => {
    let keyWord = document.querySelector('.search input').value;
    url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&q=${keyWord}&apiKey=${apiKey}`);
    getNews();
}

const render = () => {
    console.log(newsList);
    const renderTarget = document.querySelector('.newsArea');
    const newsHTML = newsList.map((item) => `
    <div class="news">
        <a href="${item.url}">
            <div class="newsImg">
                <img src="${item.urlToImage}" alt="">
            </div>
            <div class="newsTxt">
                <p>${item.title}</p>
                <p>${item.description}</p>
                <p>${item.publishedAt}</p>
            </div>
        </a>
    </div>
    `).join('');
    renderTarget.innerHTML = newsHTML;
}

const errorRender = (msg) => {
    const renderTarget = document.querySelector('.newsArea');
    const errorHtml = `<div>
                        ${msg}
                    </div>`;
    renderTarget.innerHTML = errorHtml;
}

const paginationRender = () => {
    let paginationHtml = ``;
    const totalPages = Math.ceil(totalResults / pageSize); // 전체 페이징수
    const pageGroup = Math.ceil(page / groupSize); // 한번에 노출되는 페이징수
    let lastPage = pageGroup * groupSize; // 마지막 페이징
    // 마지막 페이징이 pageGroup보다 작을 경우
    if (lastPage > totalPages) {
        lastPage = totalPages;
    }
    const firstPage = lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1); // 처음 페이징
    for (let i = firstPage; i <= lastPage; i++) {
        paginationHtml += `<li><a href="javascript:;" onclick="movePage(${i})">${i}</a></li>`;
    }
    document.querySelector('.pagiNation').innerHTML = paginationHtml;
}

const movePage = (pageNum) => {
    page = pageNum;
    getNews();
}

getLatestNews();