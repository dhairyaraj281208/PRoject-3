AFRAME.registerComponent("cursor-listener", {
    init: function () {
        this.handleClickEvents();
    },
    handleClickEvents: function () {
        this.el.addEventListener("click", evt => {
            console.log(evt)
            const id = this.el.getAttribute("id");

            const glasses = [
                "mirror2",
                "mirror3",
                "mirror6",
                "mirror8",
                "mirror10",
                "mirror11",
                "mirror14",
                "mirror16",
                "mirror17",
                "mirror19",
            ];
    
    
    
    
    
            if (glasses.includes(id)) {
                var cam = document.querySelector("camera")
                cam.setAttribute("wasd-controls", "enabled", "false");
                cam.setAttribute("look-controls", "enabled", "false");
                var eli = document.querySelector("eliminati")
                eli.setAttribute("visible", "true");
            }
    
            if (id === "mirror1") {
                var cam = document.querySelector("camera")
                cam.setAttribute("position", { x: -1.5, y: 0, z: -4 })
            }
            if (id === "mirror4") {
                var cam = document.querySelector("camera")
                cam.setAttribute("position", { x: 1.5, y: 0, z: -7 })
            } 
            if (id === "mirror5") {
                var cam = document.querySelector("camera")
                cam.setAttribute("position", { x: -1.5, y: 0, z: -10 })
            } 
            if (id === "mirror7") {
                var cam = document.querySelector("camera")
                cam.setAttribute("position", { x: -1.5, y: 0, z: -13 })
            } 
            if (id === "mirror9") {
                var cam = document.querySelector("camera")
                cam.setAttribute("position", { x: -1.5, y: 0, z: -16 })
            } 
            if (id === "mirror12") {
                var cam = document.querySelector("camera")
                cam.setAttribute("position", { x: 1.5, y: 0, z: -19 })
            } 
            if (id === "mirror13") {
                var cam = document.querySelector("camera")
                cam.setAttribute("position", { x: -1.5, y: 0, z: -22 })
            } 
            if (id === "mirror15") {
                var cam = document.querySelector("camera")
                cam.setAttribute("position", { x: -1.5, y: 0, z: -25 })
            } 
            if (id === "mirror18") {
                var cam = document.querySelector("camera")
                cam.setAttribute("position", { x: 1.5, y: 0, z: -28 })
            } 
            if (id === "mirror20") {
                var cam = document.querySelector("camera")
                cam.setAttribute("position", { x: 1.5, y: 0, z: -31 }
                )
            }

        })
    }
})
