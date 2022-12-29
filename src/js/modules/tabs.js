export function tab() {
    let COLOR = getColorFromLocalStorage() || '#F87070'; // the red is default

    function getColorFromLocalStorage() {
        return localStorage.getItem('color')
     }

    // Display progress bar
    function displayCurrentProgressBar(dataTab) {
        const progressBarList = document.querySelectorAll('.progress-wrapp');

        document.querySelector('.tab-btn-list').addEventListener('click', function(e) {
            if (e.target.className === 'tab-btn is-active' || e.target.className === 'tab-btn') 
            dataTab = e.target.dataset.tab;
            
            for ( let i = 0; i < progressBarList.length; i += 1) {
                dataTab == i ? progressBarList[i].style.display = 'flex' : progressBarList[i].style.display = 'none'
            }
        })
    }
    displayCurrentProgressBar()

    // Display active tab
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

    document.querySelector('.select-btn-apply').addEventListener('click', () => displayActiveTab()); 
}