document.addEventListener('DOMContentLoaded', function () 
{
    
    
    function createBusinessArticle(business) {
        const article = document.createElement('article');
        article.className = 'business';
        article.setAttribute('data-name', business.name);



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

       document.getElementById('search-input').addEventListener('input', searchBusiness);

       function searchBusiness() {
            const searchInput = document.getElementById('search-input').value.toLowerCase();
            const businessArticles = document.querySelectorAll('.business');
    
            businessArticles.forEach((article) => {
                const businessName = article.getAttribute('data-name').toLowerCase();
                if (businessName.includes(searchInput)) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        }
        return article;

        
    }
    
    
    
    const businessList = document.getElementById('business-list');
    
    

    fetch('data.json')
    .then(response => response.json())
    .then(data => {
                
        data.forEach(business => {
            const businessArticle = createBusinessArticle(business);
            businessList.appendChild(businessArticle);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});

