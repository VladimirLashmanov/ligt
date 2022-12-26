const LIGHTS = {
    red: 'red',
    yellow: 'yellow',
    green:'green'
};
const CLASSES_BY_LIGHT ={
    [LIGHTS.red]:'traffic-light__red',
    [LIGHTS.yellow]:'traffic-light__yellow',
    [LIGHTS.green]:'traffic-light__green'
};

const NEXT_LIGHT_BY_LIGHT={
    [LIGHTS.red]: LIGHTS.green,
    [LIGHTS.green]: LIGHTS.yellow,
    [LIGHTS.yellow]: LIGHTS.red
};

let currentLight = LIGHTS.red;


function  switchLight(node){
    currentLight = NEXT_LIGHT_BY_LIGHT[currentLight];
const currentClass =  CLASSES_BY_LIGHT[currentLight];
const nextLight =NEXT_LIGHT_BY_LIGHT[currentLight]
const nextClass =  CLASSES_BY_LIGHT[nextLight];

  node.classList.replace(currentClass, nextClass);
}

 function  initLight (node){
  node.classList.add(CLASSES_BY_LIGHT[currentLight]);
 }