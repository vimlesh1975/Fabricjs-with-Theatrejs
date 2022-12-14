import './core-and-studio.js'
// We can now access Theatre.core and Theatre.studio from here
const { core, studio } = Theatre
const projectState = { "subUnitsPerUnit": 30, "length": 10, "type": "PositionalSequence", "tracksByObject": { "rect0": { "trackData": { "Q8tQ9D7U4v": { "type": "BasicKeyframedTrack", "__debugName": "rect0:[\"left\"]", "keyframes": [{ "id": "-4GfYF84dc", "position": 0, "connectedRight": true, "handles": [0.5, 1, 0.5, 0], "value": 121 }, { "id": "Kca4t_Pc9C", "position": 1.967, "connectedRight": true, "handles": [0.5, 1, 0.5, 0], "value": 157 }] } }, "trackIdByPropPath": { "[\"left\"]": "Q8tQ9D7U4v" } } } }

studio.initialize()
// studio.ui.hide() 

// const project = core.getProject('HTML Animation Tutorial',{
//       state: projectState,
//     })
const project = core.getProject('HTML Animation Tutorial', {

})
const sheet = project.sheet('Sheet 1')

const dd=(obj,event)=>{
studio.transaction(({ set }) => {
  set(obj.props.left, event.target.left) 
  set(obj.props.top, event.target.top) 
})
}

canvas.getObjects().forEach(element => {
  const obj = sheet.object(element.id, {
    left: element.left,
    top: element.top,
  })

  element.on('mousedown',  ()=>  studio.setSelection([obj]), false);
  element.on('mousemove', (e) => dd(obj,e), false);
  
  obj.onValuesChange((obj) => {
    element.set({left:obj.left, top:obj.top});
    element.setCoords();
    canvas.requestRenderAll();
  })

});

project.ready.then(() => {
  // sheet.sequence.play({ iterationCount: Infinity, range: [0, 1.3] })
})