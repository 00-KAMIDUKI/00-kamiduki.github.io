#version 300 es

precision mediump float;

uniform vec2 u_resolution;

uniform sampler2D u_texture[2];

out vec4 frag_color;


void main() {
  vec3 color;
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec3 paper = texture(u_texture[1], uv * vec2(0.72)).rgb;
  float brightness = (paper.r + paper.g + paper.b) / 3.0;
  color = mix(vec3(1.0), vec3(0.0), brightness);
  color.g *= 1.12;
  color.b *= 1.07;

  vec3 content = texture(u_texture[0], uv).rgb;
  color = mix(content, color, log(1.5 + brightness) / log(2.5));
  frag_color = vec4(color, 1.0);
}
