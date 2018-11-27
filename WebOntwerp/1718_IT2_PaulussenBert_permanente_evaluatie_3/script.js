var Active = 'Een';

function PaginaEen() {
    document.getElementById("home").style.color = "rgba(0,0,0,0)";
    document.getElementById("home-title").style.color = "rgba(0,0,0,0)";
    document.getElementById("home").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("zoom").style.opacity = "0";
    document.getElementById("zoom").style.height = "0px";
    document.getElementById("home").style.fontSize = "0px";
    document.getElementById("pages").classList.remove('nextEr');
    document.getElementById("pages").classList.remove('next');
    document.getElementById("pages").classList.remove('previousEr');
    document.getElementById("pages").classList.remove('previous');
    
    if(Active === 'Drie') {
        document.getElementById("pages").classList.add('previousEr');
    }
    else if(Active === 'Twee') {
        document.getElementById("pages").classList.add('previous');
    };
    
    Active = 'Een';
    setTimeout(function(){ document.getElementById("pages").style.marginLeft = "0vw";
                           document.getElementById("home").style.zIndex = "-1";
                         }, 1980);
     window.scrollTo(0, 0);
}

function PaginaTwee() {
    document.getElementById("home").style.color = "rgba(0,0,0,0)";
    document.getElementById("home-title").style.color = "rgba(0,0,0,0)";
    document.getElementById("home").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("zoom").style.opacity = "0";
    document.getElementById("zoom").style.height = "0px";
    document.getElementById("home").style.fontSize = "0px";
    document.getElementById("pages").classList.remove('nextEr');
    document.getElementById("pages").classList.remove('next');
    document.getElementById("pages").classList.remove('previousEr');
    document.getElementById("pages").classList.remove('previous');
    
    if(Active === 'Een') {
        document.getElementById("pages").classList.add('next');
    }
    else if(Active === 'Drie') {
        document.getElementById("pages").classList.add('previous');
    };
    
    Active = 'Twee';
    
    setTimeout(function(){ document.getElementById("pages").style.marginLeft = "-100vw";
                            document.getElementById("home").style.zIndex = "-1";
                         }, 1980);
     window.scrollTo(0, 0);
}

function PaginaDrie() {
    document.getElementById("home").style.color = "rgba(0,0,0,0)";
    document.getElementById("home-title").style.color = "rgba(0,0,0,0)";
    document.getElementById("home").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("zoom").style.height = "0px";
    document.getElementById("home").style.fontSize = "0px";
    document.getElementById("pages").classList.remove('nextEr');
    document.getElementById("pages").classList.remove('next');
    document.getElementById("pages").classList.remove('previousEr');
    document.getElementById("pages").classList.remove('previous');
    document.getElementById("zoom").style.opacity = "0";
    
    if(Active === 'Een') {
        document.getElementById("pages").classList.add('nextEr');
    }
    else if(Active === 'Twee') {
        document.getElementById("pages").classList.add('next');
    };
    
    Active = 'Drie';
    
    setTimeout(function(){ document.getElementById("pages").style.marginLeft = "-200vw";
                           document.getElementById("home").style.zIndex = "-1";
                         
                         }, 1980);
     window.scrollTo(0, 0);

}

function Zoom(pagina, foto, tekstje) {
    var bGImage = "url('images/PAGE" + pagina + "/" + foto + ".jpg')";
    
    document.getElementById("home").style.zIndex = "1";
    document.getElementById("home").style.backgroundColor = "rgba(0,0,0,0.5)";
    document.getElementById("home-title").style.color = "rgba(250,250,250,1)";
    document.getElementById("home").style.color = "rgba(250,250,250,1)";
    document.getElementById("home-title").style.fontSize = "0px";
    document.getElementById("close").style.height = "30px";
    document.getElementById("home").style.fontSize = "16px";
    document.getElementById("zoom").style.opacity = "1";
    document.getElementById("zoom").style.height = "40vh";
    document.getElementById("zoom").style.backgroundImage = bGImage;
    document.getElementById("zoom-tekst").innerHTML = tekstje;
    
}

function Close() {
    document.getElementById("home").style.color = "rgba(0,0,0,0)";
    document.getElementById("home-title").style.color = "rgba(0,0,0,0)";
    document.getElementById("home").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("home").style.fontSize = "0px";
    document.getElementById("zoom").style.height = "0px";
    document.getElementById("zoom").style.opacity = "0";
    document.getElementById("close").style.height = "0px";
    setTimeout(function(){ 
    document.getElementById("home").style.zIndex = "-1";
                         }, 1980);
}