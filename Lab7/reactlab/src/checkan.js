
function checkanim(){
    let animanls = ["giena", "gazel", "gekkon"];
    var value = null;
    var height = null;
    var width = null;
    var color = null;
        if (dannye.value.split(" ")[2]!=null)
        {
          height =dannye.value.split(" ")[2]
        }
        if (dannye.value.split(" ")[3]!=null)
        {
          width =dannye.value.split(" ")[3]
        }
        if (dannye.value.split(" ")[4]!=null)
        {
          color =dannye.value.split(" ")[4]
        }
        for (let i = 0; i < animanls.length; i++) {
          if (dannye.value == animanls[i]) {
            var msgJSON = jsonpost(dannye.value, value, height, width, color);
            const response = await fetch("/" + dannye.value, {
              method: "POST",
              mode: 'no-cors',
              body: JSON.stringify(msgJSON),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            const json = await response.json();
            console.log(json);
            var pjson = JSON.stringify(json);
            console.log(pjson);
            document.write('<img id=myImg src= "">');
            document.getElementById("myImg").src = "public/"+json[0];
            document.write(pjson);
              return;
            }
            for (let j = 0; j < 9; j++) {
              if (dannye.value.split(" ")[0] == animanls[i] & dannye.value.split(" ")[1] == j) {
                var animal = dannye.value.split(" ")[0];
                var msgJSON = jsonpost(animal, j, height, width, color);
                const response = await fetch("/" + animal, {
                  method: "POST",
                  mode: 'no-cors',
                  body: JSON.stringify(msgJSON),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                const json = await response.json();
                console.log(json);
                var pjson = JSON.stringify(json);
                console.log(pjson);
                document.write('<img id=myImg src= "">');
                document.getElementById("myImg").src = "public/"+json[0];
                document.write(pjson);
                return;
            }
          }
        }
          alert("Error Data");
};

function jsonpost(name, value, width, height, color) {
    let animanlsJSON = {
      name: name,
      value: value,
      height: height,
      width: width,
      color: color
    };
    return animanlsJSON;
};

export default checkanim;