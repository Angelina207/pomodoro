export function settings() {
   const fonts = document.getElementsByName('font');
   const colors = document.getElementsByName('color');
   let COLOR = getColorFromLocalStorage() || '#F87070'; // the red is default
   let FONT = getFontFromLocalStorage() || 'KumbhSans'; // the 'KumbhSans' is default
 
   function getInputValue(items) {
      for (let item of items) {
         item.addEventListener('change', function() {
            item.name === 'color' ? localStorage.setItem('color', item.value) : localStorage.setItem('font', item.value);
         })
         if (item.value === COLOR) item.checked = true; 
         if (item.value === FONT) item.checked = true;
      } 
   }
   getInputValue(fonts)
   getInputValue(colors)
   
   function getColorFromLocalStorage() {  // Get current color
      return localStorage.getItem('color')
   }
   function getFontFromLocalStorage() {   // Get current font
      return localStorage.getItem('font')
   }

   // Change color elements
   function changeCurrentTabColor() {
      const tabs = document.querySelectorAll('.tab-btn');
      for (let i = 0; i < tabs.length; i++) {
         tabs[i].className === 'tab-btn is-active' ? tabs[i].style.background = COLOR : tabs[i].style.background = 'transparent';
      }
   }
   changeCurrentTabColor()

   function changeBtnColor() {
      document.querySelector('.btn-apply').style.background = COLOR;
   }
   changeBtnColor()
   
   // Change pages font
   function changeBodyFont () { 
      const body = document.querySelector('.body');
      const buttons = document.querySelectorAll('button');

      for (let button of buttons) {
         button.style.fontFamily = `${FONT}, sans-serif`;
         FONT !== 'RobotoSlab' ? button.style.fontWeight = '700' : button.style.fontWeight = '400';
      }
      body.style.fontFamily = `${FONT}, sans-serif`;
      FONT !== 'RobotoSlab' ? body.style.fontWeight = '700' : body.style.fontWeight = '400';
   }
   changeBodyFont()

   document.querySelector('.btn-apply').addEventListener('click', () => document.location.reload());  
}