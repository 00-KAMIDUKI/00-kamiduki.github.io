const vertexShaderSource = await fetch("main.vert").then(res => res.text());
const fragmentShaderSource = await fetch("main.frag").then(res => res.text());
const vertices = new Float32Array([
    -1.0, -1.0,
    -1.0, +1.0,
    +1.0, +1.0,
    +1.0, -1.0,
]);
const indices = new Uint32Array([
    0, 3, 2,
    0, 2, 1,
]);
function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) || "Unknown error creating shader");
    }
    return shader;
}
function createShaderProgram(gl, shaders) {
    const program = gl.createProgram();
    for (const shader of shaders) {
        gl.attachShader(program, shader);
    }
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program) || "Unknown error creating shader program");
    }
    return program;
}
const isPowerOf2 = (value) => (value & (value - 1)) === 0;
function loadTexture(gl, url, index, cb = () => { }) {
    const texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0 + index);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    const level = 0;
    const internalFormat = gl.RGBA;
    const srcFormat = gl.RGBA;
    const srcType = gl.UNSIGNED_BYTE;
    const image = new Image();
    image.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image);
        if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
            gl.generateMipmap(gl.TEXTURE_2D);
        }
        else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        }
        cb();
    };
    image.src = url;
    return texture;
}
const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl2');
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
const shaderProgram = createShaderProgram(gl, [vertexShader, fragmentShader]);
const vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
const positionAttributeLocation = gl.getAttribLocation(shaderProgram, "a_position");
gl.enableVertexAttribArray(positionAttributeLocation);
gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
const indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
const textureUrls = [
    "assets/content.png",
    "assets/paper.jpg",
];
gl.useProgram(shaderProgram);
let loadedTextures = 0;
for (let i = 0; i < textureUrls.length; i++) {
    loadTexture(gl, textureUrls[i], i, () => {
        ++loadedTextures;
    });
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.uniform1i(gl.getUniformLocation(shaderProgram, `u_texture[${i}]`), i);
}
function frame() {
    gl.useProgram(shaderProgram);
    gl.uniform2f(gl.getUniformLocation(shaderProgram, "u_resolution"), canvas.width, canvas.height);
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_INT, 0);
    if (loadedTextures < textureUrls.length) {
        requestAnimationFrame(frame);
    }
}
requestAnimationFrame(frame);
export {};
