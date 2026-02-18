# Pokemon PWA

Aplicación web progresiva (PWA) desarrollada con **React + Vite +
TypeScript** que consume la PokéAPI y permite buscar Pokémon, visualizar
información y funcionar offline.

------------------------------------------------------------------------

## Tecnologías utilizadas

-   React
-   Vite
-   TypeScript
-   LocalStorage (persistencia)
-   PWA (Manifest + Service Worker)
-   Docker (multi-stage build)
-   Nginx
-   Vercel

------------------------------------------------------------------------

## Funcionalidades

-   Búsqueda de Pokémon por nombre
-   Visualización de información básica
-   Persistencia de datos con LocalStorage
-   Instalación como aplicación (PWA)
-   Soporte offline mediante Service Worker

------------------------------------------------------------------------

## Estructura del Proyecto

    pokemon-pwa/
    │
    ├── public/
    │   ├── manifest.json
    │   ├── sw.js
    │   └── icons/
    │
    ├── src/
    │   ├── components/
    │   ├── services/
    │   ├── App.tsx
    │   ├── main.tsx
    │
    ├── index.html
    ├── vite.config.ts
    ├── package.json
    └── Dockerfile

------------------------------------------------------------------------

## Instalación y ejecución local

### Clonar repositorio

    git clone https://github.com/MartinUTT/pokemon-pwa.git
    cd pokemon-pwa

### Instalar dependencias

    npm install

### Ejecutar en desarrollo

    npm run dev

------------------------------------------------------------------------

## Build para producción

    npm run build

El resultado se genera en:

    /dist

------------------------------------------------------------------------

## Docker (Multi-stage build)

### Construir imagen:

    docker build -t pokemon-pwa .

### Ejecutar contenedor:

    docker run -p 8080:80 pokemon-pwa

------------------------------------------------------------------------

## PWA

Incluye:

-   manifest.json
-   sw.js
-   Iconos 192x192 y 512x512
-   Instalación desde navegador
-   Soporte offline básico

------------------------------------------------------------------------

## Deploy

Desplegado en Vercel.

URL de producción:

https://pokemon-pwa-puce.vercel.app

------------------------------------------------------------------------

## Scripts disponibles

    npm run dev
    npm run build
    npm run preview

------------------------------------------------------------------------

## Autor

Martin\
Proyecto académico -- 2026
