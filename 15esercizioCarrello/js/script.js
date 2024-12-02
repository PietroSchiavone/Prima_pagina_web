let btnMin1 = document.querySelector("#btnMin1");
let btnMin2 = document.querySelector("#btnMin2");
let btnMin3 = document.querySelector("#btnMin3");

let btnPlus1 = document.querySelector("#btnPlus1");
let btnPlus2 = document.querySelector("#btnPlus2");
let btnPlus3 = document.querySelector("#btnPlus3");

let numeriInput1 = document.querySelector("#numeriInput1");
let numeriInput2 = document.querySelector("#numeriInput2");
let numeriInput3 = document.querySelector("#numeriInput3");

function inputAumenta(input) {
    let thisInput = parseInt(input.value) || 0;
    thisInput += 1;
    input.value = thisInput;
}


function inputDiminuisci(input) {
    let thisInput = parseInt(input.value) || 0;
    if (thisInput > 0) {
        thisInput -= 1;
    }
    input.value = thisInput;
}

btnPlus1.addEventListener("click", () => inputAumenta(numeriInput1));
btnPlus2.addEventListener("click", () => inputAumenta(numeriInput2));
btnPlus3.addEventListener("click", () => inputAumenta(numeriInput3));

btnMin1.addEventListener("click", () => inputDiminuisci(numeriInput1));
btnMin2.addEventListener("click", () => inputDiminuisci(numeriInput2));
btnMin3.addEventListener("click", () => inputDiminuisci(numeriInput3));


(() => {
  

    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)
  
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme()
      if (storedTheme) {
        return storedTheme
      }
  
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = theme => {
      if (theme === 'auto') {
        document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme')
  
      if (!themeSwitcher) {
        return
      }
  
      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeThemeIcon = document.querySelector('.theme-icon-active use')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
        element.setAttribute('aria-pressed', 'false')
      })
  
      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
  
      if (focus) {
        themeSwitcher.focus()
      }
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme()
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())
  
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            setStoredTheme(theme)
            setTheme(theme)
            showActiveTheme(theme, true)
          })
        })
    })
  })()