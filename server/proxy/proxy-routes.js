const router = require('express').Router();
const axios = require('axios')
var mcache = require('memory-cache');
const multer = require('multer');
const FormData = require('form-data');

  const upload = multer();

const key = 'trolololo84746dupa';
// const encryptor = require('simple-encryptor')(key);
const backendUrl = 'http://localhost:8000/api' //process.env.API_URL

const api = axios.create({
    baseURL: backendUrl,
    auth: {
        username: process.env.BASIC_AUTH_USER,
        password: process.env.BASIC_AUTH_PASS
    },
})

var cache = (duration) => {
    return (req, res, next) => {
      let key = '__express__' + req.originalUrl || req.url
      let cachedBody = mcache.get(key)
      if (cachedBody) {
        res.send(cachedBody)
        return
      } else {
        res.sendResponse = res.send
        res.send = (body) => {
          mcache.put(key, body, duration * 1000);
          res.sendResponse(body)
        }
        next()
      }
    }
  }

router.get('/file', cache(6), async (req, res) => {
    try {
        const { data } = await api.get(req.url)
        res.json(data)
    } catch (e) {
        console.log(e)
        res.json([])
    }
})
router.post('/services', upload.any('files', 10), async (req, res) => {

    const formData = new FormData
    // formData.append('files', req.files[0].buffer, {
    //     filename: req.files[0].originalname,
    //     contentType: req.files[0].mimetype,
    //     encoding: req.files[0].encoding
    // })
    // formData.append('files', req.files[1].buffer, {
    //     filename: req.files[1].originalname,
    //     contentType: req.files[1].mimetype,
    //     encoding: req.files[1].encoding
    // })

    for (var i = 0; i < req.files.length; i++) {
        formData.append('files', req.files[i].buffer, {
            filename: req.files[i].originalname,
            contentType: req.files[i].mimetype,
            encoding: req.files[i].encoding
        });
      }

      for (var key in req.body) {
        formData.append(key, req.body[key]);
      }

    try {
        const { data } = await api.post(req.url, formData, {headers: formData.getHeaders()} )
        res.json(data)
    } catch (e) {
        console.log(e)
        res.json('something went wrong')
    }
})
router.get('/cords/:city', cache(6), async (req, res) => {
    console.log(req.url)
    try {
        const { data } = await axios.get(`http://localhost:8000/api${req.url}`)
        res.json(data)
    } catch (e) {
        console.log(e, ' ERROR')
        res.json('something went wrong')
    }
})
module.exports = router;
