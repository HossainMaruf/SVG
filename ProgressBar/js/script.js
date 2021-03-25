// Circular Design
function circularProgressResult(value) {
    if(value >= 0 && value <= 100) {
        const Elements = document.getElementsByTagName('circle');
        const skillValueElements = document.getElementsByClassName('skill-value');
        for (let index = 0; index < Elements.length; index++) {
            Elements[index].style.setProperty('stroke-dashoffset',`${133 - 1.33*value}%`);
            skillValueElements[index].innerHTML = (value)? value : 0;
        }
    }
}

// Linear Design
function lineProgressResult(value) {
    if(value >= 0 && value <= 100) {
        const Elements = document.getElementsByTagName('line');
        const skillValueElements = document.getElementsByClassName('line-skill-value');
        for (let index = 0; index < Elements.length; index++) {
            Elements[index].style.setProperty('stroke-dashoffset',`${141 - 1.41*value}%`);
            skillValueElements[index].innerHTML = (value)? value : 0;
        }
    }
}

// Vertical Design
function verticalProgressResult(value) {
    if(value >= 0 && value <= 100) {
        const Elements = document.getElementsByTagName('rect');
        const skillValueElements = document.getElementsByClassName('vertical-skill-value');
        for (let index = 0; index < Elements.length; index++) {
            Elements[index].style.setProperty('stroke-dashoffset',`${313 - 3.13*value}%`);
            skillValueElements[index].innerHTML = (value)? value : 0;
        }
    }
}