const nameBrowser = document.querySelector(".titleBrowser");
const verBrowser = document.querySelector(".verBrowser");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const imgBlock = document.getElementById('imageBrowser');
const brouwserList = {
    opera : {
            value : "Opera",
            reg : /opr|opera|mac.*opt/i,
            regVersion : /opr\/([0-9.]+)|opera\/([0-9.]+)/i,
            urlImg : "./img/opera.jpg"           
            },
    edge :  {
            value :"Microsoft Edge",
            reg : /edg/i,
            regVersion : /edg\/([0-9.]+)/i,
            urlImg : "https://i.kym-cdn.com/photos/images/original/001/858/273/edd"
            },
    firefox : {
            value : "Firefox",
            reg : /firefox|mac.*fxios/i,
            regVersion : /firefox\/([0-9.]+)/i,
            urlImg : "https://images-ng.pixai.art/images/orig/0da0bb59-fdf7-4712-a74f-f16977d44877"
            },
    chrome : {
            value : "Google Chrome",
            reg : /chrome|mac.*gsa|mac.*crios/i,
            regVersion : /chrome\/([0-9.]+)/i,
            urlImg: "./img/google.jpg"
            },
    safari : {
            value : "Safari",
            reg : /safari/i,
            regVersion : /safari\/([0-9.]+)/i,
            urlImg : "https://preview.redd.it/safari-is-such-a-pain-v0-djbncqoaz9va1.jpg?auto=webp&s=8ac04336a33e3933d2c85133ef867074446f3d32"
            },
    default : "Хто ти монстр ?:)"
}


fnBrowserDetect(brouwserList)
selectCheckboxesFromUrl();

function fnBrowserDetect(brouwserList){
                 
    let userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;
    
        if(brouwserList.opera.reg.test(userAgent)){
        browserName = brouwserList.opera.value;
        } else if(brouwserList.edge.reg.test(userAgent)){
        browserName = brouwserList.edge.value;
        } else if(brouwserList.firefox.reg.test(userAgent)){
        browserName = brouwserList.firefox.value;
        } else if(brouwserList.chrome.reg.test(userAgent)){
        browserName = brouwserList.chrome.value;
        } else if(brouwserList.safari.reg.test(userAgent)){
        browserName = brouwserList.safari.value;
        } else {
        browserName= brouwserList.default;
        }

        let foundEntry = Object.entries(brouwserList).find(([key, value]) => value.value === browserName);
        browserVersion = getVersionBrowser(userAgent,foundEntry);

        nameBrowser.textContent = `Ваш браузер : ${browserName}`;
        verBrowser.textContent = `Ваша версія : ${browserVersion}`;
        rendImgBrowser(foundEntry);
}

function getVersionBrowser(userAgent,foundEntry){
    
    let result = userAgent.match(foundEntry[1].regVersion);
    return result[1];
}

function rendImgBrowser(foundEntry){
    imgBlock.innerHTML=`<img class="img-browser" src="${foundEntry[1].urlImg}">`   
}

function selectCheckboxesFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const devicesParam = urlParams.get('devices');
    const devicesArray = devicesParam ? devicesParam.split(',') : [];
    if (devicesParam) {
        checkboxes.forEach(checkbox => {
            if (devicesArray.includes(checkbox.id)) {
                checkbox.checked = true;
            }
        });
    }
}

function updateUrlFromCheckbox(checkbox) {
    const urlParams = new URLSearchParams(window.location.search);
    const devicesParam = urlParams.get('devices');
    let devicesArray = devicesParam ? devicesParam.split(',') : [];
    
    if (checkbox.checked) {
        if (!devicesArray.includes(checkbox.id)) {
            devicesArray.push(checkbox.id);
        }
    } else {
        devicesArray = devicesArray.filter(id => id !== checkbox.id);
    }
    const output = devicesArray.length > 0 ? devicesArray.join(',') : '';
    const url = output ? `${window.location.pathname}?devices=${output}` : window.location.pathname; 
    window.history.replaceState({}, '', url);
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function(event) {
        target = event.target
        updateUrlFromCheckbox(target); 
    });
});