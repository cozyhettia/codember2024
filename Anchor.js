/* INSTRUCCIONES DE INSTALACIÓN */
// Ir a Modulos - JS - Crear nuevo JS
// Titulo recomendado: Code: Anchor Stats
// Posición: En el índice

_legend = {
  // iconos que se visualizan por cada grupo
  // template: 'nombre_grupo': 'icono/html',
  'staff': '<i class="fi fi-tr-anchor"></i>',
  'ballenas': '<i class="fi fi-tr-whale"></i>',
  'cangrejos': '<i class="fi fi-tr-crab"></i>',
  'delfines': '<i class="fi fi-tr-dolphin"></i>',
  'gambas': '<i class="fi fi-tr-shrimp"></i>',
  'nutrias': '<i class="fi fi-tr-otter"></i>',
  'pulpos': '<i class="fi fi-tr-squid"></i>',
  'tortugas': '<i class="fi fi-tr-turtle"></i>',
  'caídos': '<i class="fi fi-tr-fish-bones"></i>'
};

// Frase que se visualiza al final de las estadísticas
_frase = "I hear your ship is comin' in, your tears a sea for me to swim. And I hear a storm is comin' in. My dear, is it all we've ever been?";

$(document).ready(function(){
  $('.stats-legend').each(function(){
    let sl = document.createElement('div'); sl.className = 'stats-legend';
    $(this).find('a').each(function(){
      let c = $(this).css("color");
      let g = $(this).text().toLowerCase();
      let m = $(this).attr("title").split('- ')[1];
      let h = $(this).attr("href");
      if (g!='staff') {
        let n = parseInt(m.split(': ')[1]) - 1;
        m = 'Miembros: '+n;
      } else {
        let n = m.split(': ')[1];
        m = 'Miembros: '+n;
      }
      
      $(sl).append('<a style="--group-color:'+c+'" href="'+h+'" title="'+m+'" class="generic-hover"><span>'+_legend[g]+g+'</span></a>');
    });
    $(this).replaceWith($(sl));
  });
  
  $('.stats-record').each(function(){
    let r = $(this).text().split(': ')[1];
    $(this).html(r);
  });
  
  $('.stats-quote').each(function(){
    $(this).html(_frase);
  });
  
  $('.stats-online > span').each(function(){
    let so = document.createElement('span');
    $(this).find('a').each(function(){
      $(so).append($(this));
    });
    $(this).replaceWith($(so));
  });
  
  $('.stats-today > span').each(function(){
    let h = $(this).html().split(':')[0];
    let st = document.createElement('span'); let c = 0;
    $(this).find('a').each(function(){
      $(st).append($(this));
      c++;
    });
    $(this).parent().find('h4').text(h.replace('Miembros conectados',c+' personajes'));
    $(this).replaceWith($(st));
  });
  
  $('.stats-posts').each(function(){
    let s = $(this).find('strong').text();
    $(this).html('<strong>'+s+'</strong>Mensajes Publicados');
  });
  
  $('.stats-members').each(function(){
    let s = $(this).find('strong').text();
    $(this).html('<strong>'+s+'</strong>Personajes registrados');
  });
  
  $('.stats-newest').each(function(){
    let s = $(this).find('strong').html();
    $(this).html(_lang.Welcome+s);
  });
});
