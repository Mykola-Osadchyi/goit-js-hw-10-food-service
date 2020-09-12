const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  tagBodyRef: document.querySelector('body'),
  inputRef: document.querySelector('#theme-switch-control'),
};

refs.inputRef.addEventListener('change', changeTheme);
refs.tagBodyRef.classList.add(Theme.LIGHT);

checkThemeTogglePosition();

function checkThemeTogglePosition() {
  const themeValue = localStorage.getItem('theme');
  if (themeValue === Theme.DARK) {
    refs.tagBodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    refs.inputRef.checked = true;
  };
};

function changeTheme() {
  if (refs.tagBodyRef.classList.contains(Theme.LIGHT)) {
    refs.tagBodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
  else {
    refs.tagBodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};