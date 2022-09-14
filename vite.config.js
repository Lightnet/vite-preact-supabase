/*
  Project Name: vite-preact-supabase
  License: MIT
  Created by: Lightnet
*/

// vite.config.ts
import { defineConfig } from 'vite';
import preactPlugin from '@preact/preset-vite';

export default defineConfig({
  //server: {
    //port:3000,
    //proxy: {  
    //}
  //},
  plugins: [
    preactPlugin()
  ],
});