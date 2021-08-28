
// AJAX
function loadDocMuaNay() {
    $('.widget-all').removeClass('widget-active')
    $('.widget-before-session').removeClass('widget-active')
    $('.widget-old').removeClass('widget-active')

    $('.widget-now-session').addClass('widget-active')

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://api-anime47.herokuapp.com/muanay", true);
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4){
            rendermuanay(JSON.parse(this.responseText))
        }
    }

    function rendermuanay(muanay){
        for(var anime of muanay){
            var htmls = muanay.map(function(anime){
                
                    return `         
                        <div class="col-lg-3 col-md-4 col-sm-6 col-6 mt-5">
                            <div class="post fix-post">
                                <a href="#">
                                    <img src="${anime.img}" alt="${anime.content}">
                                    <div class="ep">${anime.ep}</div>
                                    <div class="content bg-gray">${anime.content}</div>
                                </a>
                            </div>    
                        </div>    
                    `   
            }) 
            var html = htmls.join('')
            document.getElementById('id_muanay').innerHTML = html
           
        }

    }
}
  

