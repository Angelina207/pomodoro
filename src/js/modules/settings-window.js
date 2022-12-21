export function settings() {

   // Open & close settings
   const overlay = document.querySelector('.overlay');
   const settWindow = document.querySelector('.sec__setting');
   
   document.querySelector('.sett-btn').addEventListener('click', () => {
    settWindow.classList.add('is-open');
    overlay.style.display = 'block';
   });
   document.querySelector('.sett-btn-close').addEventListener('click', () => {
    settWindow.classList.remove('is-open');
    overlay.style.display = 'none';
   });

   // apply settings
   document.querySelector('.select-btn-apply').addEventListener('click', applySettings); 
   
   function getInputValue() {
      const inputFont = document.getElementsByName('font');
      const inputColor = document.getElementsByName('color');

      for (let i = 0; i < inputFont.length; i++) {
         inputFont[i].addEventListener('click', function() {
            if (inputFont[i].checked) {
               localStorage.setItem('font', this.value)
            }
         })
      }
      for (let i = 0; i < inputColor.length; i++) {
         inputColor[i].addEventListener('click', function() {
            if (inputColor[i].checked) {
               localStorage.setItem('color', this.value)
            }
         })
      }
   }
   getInputValue()

   function applySettings() {
      let FONT = localStorage.getItem('font');
      let COLOR = localStorage.getItem('color');

      const body = document.querySelector('.body');
      const button = document.getElementsByTagName('button');
      const btnApply  = document.querySelector('.select-btn-apply');
      const activeTab = document.querySelector('.is-active');

      body.style.fontFamily = `${FONT}, sans-serif`;

      for( let btn of button ) {
         btn.style.fontFamily = `${FONT}, sans-serif`;
      }

      btnApply .style.background = `${COLOR}`;
      activeTab.style.background = `${COLOR}`;
   }
   applySettings()
}