export function tab() {
    
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

    // Add active tab button
    function displayActiveTab(activeTab) {
        const tabBtn = document.querySelectorAll('.tab-btn');

        document.querySelector('.tab-btn-list').addEventListener('click', function(e) {
            if (activeTab = e.target.dataset.tab) {
                for (let i = 0; i < tabBtn.length; i += 1) {
                    activeTab == i ? tabBtn[i].classList.add('is-active') : tabBtn[i].classList.remove('is-active')
                }
            }
        })
    }
    displayActiveTab()
}