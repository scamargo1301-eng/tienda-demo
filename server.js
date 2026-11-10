const http = require('http');

const VERSION = 'v1';
const productos = [
  { nombre: 'Camiseta', precio: 25000 },
  { nombre: 'Gorra', precio: 18000 },
  { nombre: 'Mochila', precio: 60000 },
];

const html = `<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tienda Demo</title>
<style>body{font-family:sans-serif;max-width:480px;margin:40px auto;padding:0 16px}
li{margin:8px 0}small{color:#666}</style></head>
<body><h1>Tienda Demo (${VERSION})</h1>
<p>Desplegada en una plataforma PaaS</p>
<ul>${productos.map(p => `<li>${p.nombre}: $${p.precio.toLocaleString('es-CO')}</li>`).join('')}</ul>
<small>Servidor Node.js sin instalar nada: lo administra la plataforma.</small>
</body></html>`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}).listen(process.env.PORT || 3000, () => console.log('Servidor listo'));
