    // loadContent.js

    function loadHeader() {
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-container').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading header:', error);
            });
    }

    function loadFooter() {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-container').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
            });
    }