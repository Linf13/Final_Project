document.addEventListener('DOMContentLoaded', function () {
    
    
    function createBusinessArticle(business) {
        const article = document.createElement('article');
        article.className = 'business';
        
        article.innerHTML = `
        <h2>${business.name}</h2>
        <p>Category: ${business.category}</p>
        <p>Address: ${business.address}</p>
        <p>
        <strong>Rating:</strong> ${business.rating}
        <br>
        <strong>Reviews:</strong> ${business.reviews}
        </p>
        <a href="#">Read Reviews</a>
        
        
        </div>
        <details><summary>Learn more</summary>
        ${business.name}
        <div>${business.contact}</div>
        <div>${business.hours}</div>
        <div>${business.services}</div>
        ${business.hours}
        ${business.services}
        </details>
        `;
        
        return article;
    }
    
    
    const businessList = document.getElementById('business-list');
    
    
    // var dataList;

    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // dataList = data;        
        data.forEach(business => {
            const businessArticle = createBusinessArticle(business);
            businessList.appendChild(businessArticle);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});

