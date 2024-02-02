const express = require("express");
const movieData = require("../model/movieData");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));







//GET Method -----------------

router.get("/", async (req, res) => {
  try {
    const data = await movieData.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send("No data found");
  }
});

// POST Method----------

router.post("/add", async (req, res) => {
    try {
      var item = req.body;
      const Data = new movieData(item);
      const saveddata = await Data.save();
      res.status(200).send("Added Successful");
    } catch (error) {
      console.error(error); // Log the error to the console
      res.status(404).send(error.message || "Error occurred");
    }
  });


  router.put('/edit/:id',async(req,res)=>{
    try {
        var item=req.body;
       const data= await movieData.findByIdAndUpdate(req.params.id,item);
        res.status(200).send('Updated successfully');
    } catch (error) {
        res.status(404).send('Update not working');
    } 
    
  })
  
  //Deleted Method-----------
  
  router.delete("/remove/:id",  async (req,res) => {
   
    try {
      const BlogId = req.params.id;
      const data = await movieData.findByIdAndDelete(BlogId);
      console.log(data)
      res.status(200).send('Deleted');
    } catch (error) {
      res.status(404).send("No data found");
    }
  });
  


  //Movie page 
  router.get('/movie/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const movie = await movieData.findById(id);
  
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
  
      res.json(movie);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });


module.exports = router;