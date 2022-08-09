import sharp from 'sharp';
import fs from 'fs';

const img3 = fs.readFileSync('./test-3.png');
const img4 = fs.readFileSync('./test-4.png');
const img5 = fs.readFileSync('./test-5.png');

// Works on all versions.
sharp(img3)
  .composite([
    {
      input: img3,
      top: 0,
      left: 0,
    },
    {
      input: img4,
      top: 0,
      left: 100,
    },
    {
      input: img5,
      top: 0,
      left: 200,
    },
  ])
  .toFile('output-works.png')
  .then((e) => {
    console.log(e);
  });

// If sharp version <= 0.29.3 it works.
sharp({
  create: {
    channels: 4,
    height: 500,
    width: 300,
    background: {
      alpha: 0,
      b: 0,
      g: 0,
      r: 0,
    },
  },
})
  .composite([
    {
      input: img3,
      top: 0,
      left: 0,
    },
    {
      input: img4,
      top: 0,
      left: 100,
    },
    {
      input: img5,
      top: 0,
      left: 200,
    },
  ])
  .toFile('output-broken.png')
  .then((e) => {
    console.log(e);
  });
