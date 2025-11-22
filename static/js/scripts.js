

const content_dir = 'contents/'
const config_file = 'config.yml'
const section_names = ['home', 'portfolio', 'awards']


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Yaml
    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }

            })
        })
        .catch(error => console.log(error));


    // Marked
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach((name, idx) => {
        fetch(content_dir + name + '.md')
            .then(response => response.text())
            .then(markdown => {
                const html = marked.parse(markdown);
                document.getElementById(name + '-md').innerHTML = html;


                if (name === 'portfolio') {
                    setTimeout(initPortfolioAccordion, 100);
                }


            }).then(() => {
                // MathJax
                MathJax.typeset();
            })
            .catch(error => console.log(error));
    })

}); 


// Portfolio accordion functionality
function initPortfolioAccordion() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const title = item.querySelector('.portfolio-title');
        const content = item.querySelector('.portfolio-content');
        
        title.addEventListener('click', () => {
            // Toggle active class for animation
            title.classList.toggle('active');
            content.classList.toggle('active');
            
            // Close other items (optional - remove if you want multiple items open)
            portfolioItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.portfolio-title').classList.remove('active');
                    otherItem.querySelector('.portfolio-content').classList.remove('active');
                }
            });
        });
    });
}