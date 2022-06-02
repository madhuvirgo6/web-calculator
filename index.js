function clearScreen() {
    document.getElementById("result").value= "";
}

function liveScreen(value) {
    document.getElementById("result").value += value;
}

function switchTheme() {
    alert('switching theme');
    let darkmode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "light.css") {
        alert(theme.getAttribute("href"));
        theme.href = "dark.css";
        darkmode.innerHTML = "Light Mode"
    } else {
        theme.href = "light.css";
        darkmode.innerHTML = "Dark Mode"
    }
}

/**
 * 1. create repo on github
 * 2. git init
 * 3. git add .
 * 4. git commit -m "first commit"
 * 5. git remote add origin https://github.com/madhuvirgo6/web-calculator.git
 * 6. git push 
 * 
 */