import multer from "multer";
const storage=multer.diskStorage({
    // destination: (req, file, cb) => {
    //     cb(null, './uploads');
    //   },  
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Add timestamp to avoid duplicates
    }
})
const upload=multer({storage})

export default upload;