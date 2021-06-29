var icon = document.getElementById('icon');
icon.onclick = function(){
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        icon.src = "https://img.icons8.com/ios-glyphs/30/ffffff/sun--v1.png";
    }else{
        icon.src = "https://img.icons8.com/ios-glyphs/30/000000/moon-symbol.png";
    }
}