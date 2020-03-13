const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

if (!gl) {
    throw new Error('WebGL not supported');
}

// vertexData = [...]

// create buffer
// load vertexData into buffer

// create vertex shader
// create fragment shader
// create program
// attach shaders to program

// enable vertex attributes

// draw


// Creating vertex points
let vertexData = [
    -1 , 1 , 0,
    1 , -1 , 0,
    -1 , -1 , 0,
    1 , 1 , 0,
];

let colorData = [
    0 , 1 , 0,
    1 , 0 , 0,
    0 , 0 , 1,
];

//Creating buffer to load content into the GPU
const colorBuffer = gl.createBuffer();
//Binding the created buffer to hold JS arrays
gl.bindBuffer(gl.ARRAY_BUFFER,colorBuffer);
//Loading the data into a buffer which is static(i.e. Can't rewrite buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);

//Creating buffer to load content into the GPU
const positionBuffer = gl.createBuffer();
//Binding the created buffer to hold JS arrays
gl.bindBuffer(gl.ARRAY_BUFFER,positionBuffer);
//Loading the data into a buffer which is static(i.e. Can't rewrite buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);
//Creating the vertex shader
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
//GL source syntax
gl.shaderSource(vertexShader, `
    precision mediump float;

    attribute vec3 position;
    attribute vec3 color;
    varying vec3 vColor;
    void main() {
        vColor = color;
        gl_Position = vec4(position, 1);
    }
`);
gl.compileShader(vertexShader);
//Creating fragment shader
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
    precision mediump float;

    varying vec3 vColor;
    void main() {
        gl_FragColor = vec4(vColor, 1);
    }
`);
gl.compileShader(fragmentShader);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

//Get attributes from program
const positionLocation = gl.getAttribLocation(program, 'position');
//All attributes are disabled by default, enabling it
gl.enableVertexAttribArray(positionLocation);
//Since there are multiple buffers, we rebind respective buffers to prevent the latest buffer to bind to everything
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
//How we're getting attributes
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

//Get attributes from program
const colorLocation = gl.getAttribLocation(program, 'color');
//All attributes are disabled by default, enabling it
gl.enableVertexAttribArray(colorLocation);
//Since there are multiple buffers, we rebind respective buffers to prevent the latest buffer to bind to everything
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
//How we're getting attributes
gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);
//Which program are we using
gl.useProgram(program);
//Which mode are we drawing the program
gl.drawArrays(gl.TRIANGLES, 0, 3);