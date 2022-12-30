export function openSett() {
    // Open & close settings
   const overlay = document.querySelector('.overlay');
   const settings = document.querySelector('.sec__setting');
   
   document.querySelector('.sett-btn').addEventListener('click', () => displaySettings());
   document.querySelector('.sett-btn-close').addEventListener('click', () => closeSettings());
   document.querySelector('.overlay').addEventListener('click', () => closeSettings())

   function displaySettings() {
    settings.classList.add('is-open');
    overlay.style.display = 'block';
   }

   function closeSettings() {
    settings.classList.remove('is-open');
    overlay.style.display = 'none';
   }
}