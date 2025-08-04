import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

//Making a change
//Hello?
Checking if it works hereee>((resolve, reject) => {
  
})

// This is a Vite configuration file for a React project.
