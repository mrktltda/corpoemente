// Notificações: alterna entre 6000 e 9000ms
(function(){
  const names = ['Fernando','Pedro','Valéria','Mariana','Lucas','Ana','Carla','João','Beatriz'];
  const cities = ['São Paulo','Recife','Curitiba','Rio de Janeiro','Belo Horizonte','Porto Alegre'];
  const wrap = document.getElementById('toastWrap');
  let toggle = false;

  function createToast(text){
    if(!wrap) return;
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = '✅ ' + text;
    wrap.appendChild(el);
    requestAnimationFrame(()=> el.classList.add('show'));
    setTimeout(()=> { el.classList.remove('show'); setTimeout(()=> { try{ wrap.removeChild(el); } catch(e){} }, 400); }, 3200);
  }

  function scheduleNext(){
    toggle = !toggle;
    const delay = toggle ? 6000 : 9000;
    setTimeout(()=> {
      const name = names[Math.floor(Math.random()*names.length)];
      const city = cities[Math.floor(Math.random()*cities.length)];
      createToast(`${name} de ${city} acabou de adquirir o Desafio dos 30 Dias!`);
      scheduleNext();
    }, delay);
  }

  setTimeout(scheduleNext, 1500);
})();

// fixed CTA minor behavior (no animation pulse, but hover glow)
(function(){
  const fixed = document.getElementById('fixedCTA');
  if(!fixed) return;
  // optional: track clicks, open in new tab
  fixed.addEventListener('click', function(e){
    // analytics placeholder
  });
})();
