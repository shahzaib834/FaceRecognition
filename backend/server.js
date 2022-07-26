const express = require('express');
const app = express();
const Clarifai = require('clarifai');

const clarifai = new Clarifai.App({
  apiKey: '204e913c1a5e473a9083ec2ffdd0b272',
});

app.post('/image', async (req, res) => {
  const result = await clarifai.models.predict(
    Clarifai.FACE_DETECT_MODEL,
    'https://images2.alphacoders.com/702/702389.jpg'
  );
  res.send(result.outputs[0].data.regions[0].region_info.bounding_box);
});

app.listen(5000, () => console.log('server started at port 5000'));
