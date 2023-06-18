$(".box-1").throwable({
    container:[1000,400,1000,400],
    drag:true,
    gravity:{x:0,y:0},
    impulse:{
        f:70,
        p:{x:5,y:1}
    },
    shape:"circle",
    autostart:true,
    bounce:0.5,
    damping:100,
    areaDetection:[[0,0,0,0]],
    collisionDetection: true
});

$(".box-2").throwable({
    container:[1000,400,1000,400],
    drag:true,
    gravity:{x:0,y:0},
    impulse:{
        f:52,
        p:{x:1,y:1}
    },
    shape:"circle",
    autostart:true,
    bounce:0.8,
    damping:100,
    areaDetection:[[0,0,0,0]],
    collisionDetection: true
});

$(".box-3").throwable({
    container:[1000,400,1000,400],
    drag:true,
    gravity:{x:0,y:0},
    impulse:{
        f:52,
        p:{x:1,y:1}
    },
    shape:"circle",
    autostart:true,
    bounce:0.8,
    damping:100,
    areaDetection:[[0,0,0,0]],
    collisionDetection: true
});

$(".box-4").throwable({
    container:[1000,400,1000,400],
    drag:true,
    gravity:{x:0,y:0},
    impulse:{
        f:52,
        p:{x:1,y:1}
    },
    shape:"circle",
    autostart:false,
    bounce:0.8,
    damping:100,
    areaDetection:[[0,0,0,0]],
    collisionDetection: true
});

function openNav() {
    document.getElementById("myNav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

let button = document.querySelector('.button-submit')
let modal = document.querySelector('.modal')
let close = document.querySelector('.modal-close')

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal-show')
})

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal-show')
})