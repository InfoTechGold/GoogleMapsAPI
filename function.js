window.onload=function(){ //iniciando o javascript na página depois de carregar tudo
	


	var map; //criando a variavel map para criar nosso mapa lá no html
	function inicialize(){ //criando a função para iniciar o mapa

		var mapProp={ //criando um objeto do mapa 
			center:new google.maps.LatLng(-8.065447,-34.889696),//centralizar na minha tela e na minha localização
			scrollWheell:false,
			zoom:8,//dar um zoom para o mapa
			mapTypeID:google.maps.MapTypeId.SATELLITE // o tipo de mapa que vai ser o id dele
		}
		map=new google.maps.Map(document.getElementById("mapa"),mapProp);//criando um novo objeto mapa no nosso conteúdo html 
	}

	function addMarker(lat,long,icon,content){ // criando uma função para a marcação para marcar a minha localidade
		var latLng = {'lat':lat,'lng':long};//criando um objeto para guardar minha localização

		var marker = new google.maps.Marker({ // criando o objeto marcar
			position:latLng,//a posição que recebi na função
			map:map,//no meu mapa que criamos a cima
			icon:icon // meu icone
		});

		var infoWindow = new google.maps.InfoWindow({// criando objeto com uma largura pré definidas
			content:content,//meu conteudo que vamos passamos como parametro
			maxWidth:200, //maxima largura
			pixelOffset: new google.maps.Size(0,20) //a posição do tamanho do meu mapa no html
		});

		
		google.maps.event.addListener(marker,'click',function(){// função de clicar na marcação e ela abrir
			infoWindow.open(map,marker);//abrindo a caixa de texto da marcação
		})
		
	}

	//estilizando um parágrafo para meu conteúdo 
	var conteudo=`<p style="color:black;font-size:20px;font-weight:bold;border-bottom:2px solid black;padding:10px">InfoTechGold</p>`

	inicialize(); // inicializando o mapa 
	addMarker(-8.065447,-34.889696,'',conteudo); //adicionando uma marcação ao meu mapa na minha localização
}