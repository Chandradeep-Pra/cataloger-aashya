import ColorThief from 'colorthief';


function rgbToHex([r, g, b]: number[]): string {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`;
}

export async function getGradientFromImage(imageUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Allow CORS
    img.src = imageUrl;

    img.onload = () => {
      const colorThief = new ColorThief();
      const palette = colorThief.getPalette(img, 2);
      if (palette && palette.length >= 2) {
        const [c1, c2] = palette;

        
        // console.log(c1,c2)
        const gradient = `linear-gradient(to right, rgb(${c1.join(',')}), rgb(${c2.join(',')}))`;
        resolve(gradient);
      } else {
        reject('Not enough colors found');
      }
    };

    img.onerror = () => reject('Image failed to load');
  });
}
