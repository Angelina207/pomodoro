export function tab() {
    let COLOR = getColorFromLocalStorage() || '#F87070'; // the red is default

    function getColorFromLocalStorage() {
        return localStorage.getItem('color')
     }
    function displayActiveTab(activeTab) {
        const tabBtn = document.querySelectorAll('.tab-btn');

        document.querySelector('.tab-btn-list').addEventListener('click', function(e) {
            if (activeTab = e.target.dataset.tab) {
                for (let i = 0; i < tabBtn.length; i += 1) {
                    if (activeTab == i) {
                        tabBtn[i].classList.add('is-active');
                        tabBtn[i].style.background = COLOR;
                    } else {
                        tabBtn[i].classList.remove('is-active');
                        tabBtn[i].style.background = 'transparent';
                    }
                }
            }
        })
    }
    displayActiveTab()
}